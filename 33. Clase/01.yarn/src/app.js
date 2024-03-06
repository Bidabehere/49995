import express from "express";

const PORT = 8080;

const app = express();
app.listen(PORT, ()=>console.log(`Server funcionando en el puerto: ${PORT}`));


app.get("/", (req,res)=>{
    res.send("Hola Coders!");
})

