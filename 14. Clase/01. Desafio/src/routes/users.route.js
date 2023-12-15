import { Router } from "express";
import userModel from "../models/user.model.js";

const router = Router();

router.get("/", async (req,res)=>{

    const users = await userModel.find();
    res.send({users})

})

router.post("/", async (req,res)=>{

    const {first_name, last_name,email} = req.body;

    if(!first_name || !last_name || !email){
        return res.status(400).send({error:"Valores incompletos"})
    } 

    const user = {
        first_name,
        last_name,
        email
    }
    const result = await userModel.create(user);
    res.send({result})

})



export default router;