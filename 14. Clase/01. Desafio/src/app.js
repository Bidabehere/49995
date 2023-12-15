import express from "express";
import {engine} from "express-handlebars";
import mongoose from "mongoose";

import __dirname from "./utils.js";
import viewRouter from "./routes/views.route.js";
import userRouter from "./routes/users.route.js";
import estudianteRouter from "./routes/estudiantes.router.js";

const PORT = 8080;
let messages = [];
const app = express();

const httpServer = app.listen(PORT, () => console.log(`Servidor funcionando en el puerto: ${PORT}`));
app.use(express.json());
app.use(express.urlencoded({extended:true}))


const MONGO =  "mongodb+srv://";
const connection = mongoose.connect(MONGO);




app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use("/", viewRouter);
app.use("/api/user", userRouter);
app.use("/api/estudiante", estudianteRouter);


