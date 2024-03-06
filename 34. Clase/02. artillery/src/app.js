import express from "express";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto ${PORT}`))



app.get("/sencilla", (req,res)=>{
    let sum = 0;
    for (let i = 0; i < 1000000; i++) {
        sum += i;
    }
    res.send({sum})
})

app.get("/compleja", (req,res)=>{
    let sum = 0;
    for (let i = 0; i < 5e8; i++) {
        sum += i;
    }
    res.send({sum})
})