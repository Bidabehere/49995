import express from "express";
import { addLogger } from "./utils/logger.js";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto ${PORT}`))

//middleware
app.use(addLogger);

app.get("/", (req,res)=>{
    req.logger.warn("Error!");
    res.send("Bienvenido!")
})