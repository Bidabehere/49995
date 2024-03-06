import express from "express";
import {sumar, multiplicar, potenciar} from "minpmmatecoder";

const PORT = 8080;

const app = express();
app.listen(PORT, ()=>console.log(`Server funcionando en el puerto: ${PORT}`));


app.get("/", (req,res)=>{
    const {numero1, numero2} = req.query;
    const resultado = potenciar(parseInt(numero1),parseInt(numero2));
    res.send(`Hola Coders! Ya somos ${resultado}`);
})

