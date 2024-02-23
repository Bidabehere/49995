import express from "express";
import compression from "express-compression";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));


//Para toda la aplicacion
//app.use(compression());

app.get("/endpoint-normal", (req,res)=>{
    let string = "Hola Coder, soy una cadena muy larga";
    for (let i = 0; i < 5e4; i++) {
        string += " - Hola Coder, soy una cadena muy larga";
    }
    res.send(string)
})

app.get("/endpoint-gzip", compression, (req,res)=>{
    let string = "Hola Coder, soy una cadena muy larga";
    for (let i = 0; i < 5e4; i++) {
        string += " - Hola Coder, soy una cadena muy larga";
    }
    res.send(string)
})
