import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import passport from "passport";

import initializePassport from "./config/passport.config.js";
import { authorize, passportCall } from "./utils.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.static('./src/public'));
app.use(cookieParser());
initializePassport()
app.use(passport.initialize());

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})


app.post('/login', (req,res)=>{
    const {email, password} = req.body;
    if(email==='coder@coder.com' && password ==='123456'){
        let token = jwt.sign({email,password,role:"user"}, 'coderSecret',{expiresIn:'24h'})
        res.cookie("token-cookie",token, {httpOnly:true}).json({status:"success"})
        //res.cookie("token-cookie",token).json({status:"success"})
    }else if(email==='coderadmin@coder.com' && password ==='123456'){
        let token = jwt.sign({email,password,role:"admin"}, 'coderSecret',{expiresIn:'24h'})
        res.cookie("token-cookie",token, {httpOnly:true}).json({status:"success"})
    }else{
        res.status(400).send({status:'Error', error:'Error de credenciales'})
    }
})

app.get('/current', passportCall('jwt'),authorize("user"),(req,res)=>{
    console.log(req.user);
    res.send(req.user)
})
app.get('/admin', passportCall('jwt'),authorize("admin"),(req,res)=>{
    console.log(req.user);
    res.send(req.user)
})