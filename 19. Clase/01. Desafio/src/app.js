import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const PORT = 8080;
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/sessions';


const app = express();

app.use(session({
    store: new MongoStore({
        mongoUrl: MONGO,
    
    }),
    secret:"CoderSecret",
    resave:false,
    saveUninitialized:false
}))

app.get("/", (req,res)=>{
    req.session.user = "Active Session";
    console.log(req.session.user);
    res.send("Session Set");
})

app.get("/test", (req,res)=>{
    res.send(req.session.user);
})

app.listen(PORT, ()=> console.log(`Servidor funcionando en el puerto: ${PORT}`))