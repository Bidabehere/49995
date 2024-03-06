import cluster from "cluster";
import os from "os";
import express from "express";


const numeroCPUS = os.cpus().length;

//console.log(numeroCPUS);

const PORT = 8080;

if(cluster.isPrimary){

    console.log(`Soy el proceso principal ${process.pid}`);

    for (let i = 0; i < numeroCPUS; i++) {
        //por cada CPU hago un fork
        cluster.fork();
    }

    cluster.on("exit", (worker)=>{
        console.log(`El proceso secundario dejo dee funcionar: ${worker.process.pid}`);
        cluster.fork();
    })

}else{

    const app = express();
    console.log(`Soy un proceso secundario ${process.pid}`);

    app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto ${PORT}`));

    app.get("/", (req,res)=>{
        res.send({
            msg: `Soy el PID: ${process.pid}`
        })
    })

    app.get("/sencilla", (req,res)=>{
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        res.send({
            sum,
            msg: `Soy el PID: ${process.pid}`
        })
    })
    
    app.get("/compleja", (req,res)=>{
        let sum = 0;
        for (let i = 0; i < 5e8; i++) {
            sum += i;
        }
        res.send({
            sum,
            msg: `Soy el PID: ${process.pid}`
        })
    })

}