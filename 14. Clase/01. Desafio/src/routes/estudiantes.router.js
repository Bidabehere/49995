import { Router } from "express";
import estudiantesModel from "../models/estudiante.model.js"

const router = Router();


const estudiantes = [{
    "nombre": "Steffen",
    "apellido": "Terzo",
    "edad": 36,
    "dni":"0115691240",
    "curso":"Programación Backend",
    "nota":9
  }, {
    "nombre": "Jorgan",
    "apellido": "Matthis",
    "edad": 27,
    "dni":"029358120",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Haley",
    "apellido": "Proback",
    "edad": 34,
    "dni":"51241268",
    "curso":"Diseño UX/UI",
    "nota":7
  }, {
    "nombre": "Michelina",
    "apellido": "Beaglehole",
    "edad": 34,
    "dni":"24614567",
    "curso":"Diseño UX/UI",
    "nota":6
  }, {
    "nombre": "Jeralee",
    "apellido": "Postans",
    "edad": 26,
    "dni":"97212450",
    "curso":"Programación Frontend",
    "nota":6
  }, {
    "nombre": "Jordain",
    "apellido": "Kerner",
    "edad": 35,
    "dni":"41262234",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Harriett",
    "apellido": "Skeene",
    "edad": 33,
    "dni":"21245129",
    "curso":"Programación Backend",
    "nota":10
  }, {
    "nombre": "Andie",
    "apellido": "McIlrath",
    "edad": 20,
    "dni":"59127389",
    "curso":"Programación Frontend",
    "nota":9
  }, {
    "nombre": "Sapphira",
    "apellido": "Arnholtz",
    "edad": 17,
    "dni":"03128893",
    "curso":"Programación Backend",
    "nota":5
  }, {
    "nombre": "Terra",
    "apellido": "Wadsworth",
    "edad": 31,
    "dni":"002213850",
    "curso":"Diseño UX/UI",
    "nota":10
  }]


router.get("/", async (req,res)=>{

    const estudiantes = await estudiantesModel.find();
    res.send({estudiantes})

})


router.post("/", async (req,res)=>{

    const {nombre, apellido,edad, dni,curso,nota} = req.body;
    
    if(!nombre || !apellido || !edad || !dni || !curso || !nota){
        return res.status(400).send({error: 'Datos incompletos'});
    }

    const estudiante = {
        nombre,
        apellido,
        edad,
        dni,
        curso,
        nota
    }

    const result = await estudiantesModel.create(estudiante);

    res.send({result})

})

router.get("/insert", async (req,res)=>{

    const result = await estudiantesModel.insertMany(estudiantes);
   
    res.send({result})

})

router.delete("/:sid", async (req,res)=>{

    const id = req.params.sid;
    let result = await estudiantesModel.deleteOne({_id:id})
    res.send({result})

})


router.put("/:sid", async (req,res)=>{
    
    const id = req.params.sid;
    const updateEstudiante = req.body;

    const result = await estudiantesModel.updateOne({_id:id},{$set:updateEstudiante});
   
    res.send({result})

})





export default router;