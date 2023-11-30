import express, { urlencoded } from "express";
import handlebars from "express-handlebars";
//import {engine} from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import usersRouter from "./routes/users.router.js";

const PORT = 8080;
const app = express();

app.use(urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(__dirname + "/../public"))

app.engine("handlebars",handlebars.engine())
//app.engine("handlebars",engine())

app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})


app.use("/", viewsRouter);
app.use("/api/users", usersRouter)


