import express from "express";
import cors from "cors";

const PORT = 8080;

const app = express();

app.use(express.json());

app.use(cors()); // ->libre

/* app.use(cors({ ->Particular
    origin:"http://127.0.0.1:5500",
    origin:"http://127.0.0.1:5550",
})); */


app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));


let users = [
    {
        name:"Pepe",
        email:"meme@email.com"
    }
];

app.get("/api/user",(req,res)=>{
    res.json({status:"success",users});
})

app.post("/api/user",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({status:"success",message:"usuario agregado"});
})