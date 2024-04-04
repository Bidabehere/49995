import chai from "chai";
import supertest from "supertest";
import petModel from "../src/dao/models/Pet.js";
import userModel from "../src/dao/models/User.js";

import { app } from "../src/app.js";

const expect = chai.expect;
const requester = supertest(app);


describe( "Testing de App mascotas", ()=>{

    describe("Test del modulo mascotas", ()=>{
        beforeEach(async function(){
            await petModel.deleteMany({});
        })

        it("El endpoint post /api/pets crea una mascota correctamente", async function(){
            const petMock = {
                name: "Rocko",
                specie:"Perro",
                birthDate:"02-11-2020"
            }
            const result = await requester.post("/api/pets/").send(petMock);
            //console.log(result);
            const { statusCode, _body } = result;
            expect(statusCode).to.be.equal(200);
            expect(_body.status).to.be.equal("success");
        })

        it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted : false", async function(){
            const petMock = {
                name: "Rocko",
                specie:"Perro",
                birthDate:"02-11-2020"
            }
            const response = await requester.post("/api/pets").send(petMock);
            expect(response.body.payload.adopted).to.be.equal(false)
        })
        it("Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400.", async function(){
            const petMock = {
                specie:"Perro",
                birthDate:"02-11-2020"
            }
            const response = await requester.post("/api/pets").send(petMock);
            expect(response.statusCode).to.be.equal(400)
        })

        it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async function(){
            const response = await requester.get("/api/pets");
            expect(response.statusCode).to.be.equal(200);
            expect(response.body).to.haveOwnProperty("status");
            expect(Array.isArray(response.body.payload)).to.deep.equal(true)
        })
        
        it("PUT /api/pets/:pid most return 200", async function(){
            const petMock = {
                name: "Rocko",
                specie:"Perro",
                birthDate:"02-11-2020"
            }
            const {body, statusCode, ok} = await requester.post("/api/pets").send(petMock);

            const response = await requester.put(`/api/pets/${body.payload._id}`).send({name:"Firulais"});

            expect(response.body.name).to.not.be.equal(petMock.name);
        })

        it("DELETE /api/pets/:pid most return 200", async function(){
            const petMock = {
                name: "Rocko",
                specie:"Perro",
                birthDate:"02-11-2020"
            }
            const {body, statusCode, ok} = await requester.post("/api/pets").send(petMock);

            const responseDelete = await requester.delete(`/api/pets/${body.payload._id}`)

            const response = await requester.get(`/api/pets/${body.payload._id}`)

            expect(response.body.payload).to.be.equal(undefined);

        })
    })

    describe("Test flujo Usuarios", ()=>{
        
        before(async function(){
            await userModel.deleteMany({});
        })
    
        it("registro de usuario", async function(){
            const mockUser = {
                first_name:"juan",
                last_name:"perez",
                email:"pedro@gmail.com",
                password:"1234"
            };
            const responseSigned = await requester.post("/api/sessions/register").send(mockUser);
            expect(responseSigned.statusCode).to.be.equal(200)

        })

        it("Debe loguear al usuario y devolver una cookie", async function () {
            const mockUserLogin = {
                email:"pedro@gmail.com",
                password:"1234"
            };
            const responseLogin = await requester.post("/api/sessions/login").send(mockUserLogin);
            const cookiResponse = responseLogin.headers["set-cookie"][0];
            const cookieData = {
                name: cookiResponse.split("=")[0],
                value: cookiResponse.split("=")[1]
            }
            this.cookie = cookieData;
            expect(this.cookie.name).to.be.equal("coderCookie");
        })

        it("Al llamar /current obtenemos la cookie y la informacion del usuario", async function () {
            const currentResponse = await requester.get("/api/sessions/current").set("Cookie", [`${this.cookie.name}=${this.cookie.value}`]);
            expect(currentResponse.body.payload.email).to.be.equal("pedro@gmail.com")
        })

        it("Que el endpoint de unprotectedLogin devuelva una cookie de nombre unprotectedCookie.", async function (){
            const credentialMock2 = {
                email: "pedro@gmail.com",
                password:"1234"
            }
            const response = await requester.get("/api/sessions/unprotectedLogin").send(credentialMock2);
            const cookiesResult = response.headers['set-cookie'][0];
            //expect(cookiesResult).to.be.ok;

            this.cookie ={
               name: cookiesResult.split('=')[0],
               value: cookiesResult.split('=')[1]
            }
 /*            console.log("this.cookie");
            console.log(this.cookie);
            console.log("this.cookie"); */

            expect(this.cookie.value).to.be.ok;
            expect(this.cookie.name).to.be.equal('unprotectedCookie')
        })

        it("Que el endpoint unprotectedCurrent devuelva al usuario completo.", async function (){
            //const response = await requester.get("/api/sessions/unprotectedCurrent").set('Cookie',[`${this.cookie.name}=${this.cookie.value}`])
            //expect(response.body.payload.email).to.be.equal("pedro@gmail.com")
            
            const { _body: { payload } } = await requester.get("/api/sessions/unprotectedCurrent").set('Cookie',[`${this.cookie.name}=${this.cookie.value}`])
            expect(payload.email).to.be.equal("pedro@gmail.com")
            
        })

    })

    describe("Carga de imagen", ()=>{
        
        beforeEach(async function(){
            await petModel.deleteMany({})
        })

        it("Debe poder crearse una mascota con la ruta de la imagen", async function(){

            const petMock={
                name:"Pelusa",
                specie:"Gato",
                birthDate:"02-11-2020"
            };

            const response = await requester.post("/api/pets/withimage")
            .field("name", petMock.name)
            .field("specie",petMock.specie)
            .field("birthDate", petMock.birthDate)
            .attach("image", "./test/images/gato.jpg");
            
            expect(response.statusCode).to.be.equal(200);
            //expect(response.body.payload.image).to.be.ok;
        })
            
    })

})