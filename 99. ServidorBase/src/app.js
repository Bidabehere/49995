import express from "express";
import {engine} from "express-handlebars";
import viewRouter from "./routes/views.route.js";
import __dirname from "./utils.js";

const PORT = 8080;
let messages = [];
const app = express();

const httpServer = app.listen(PORT, () => console.log(`Servidor funcionando en el puerto: ${PORT}`));


app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use("/", viewRouter);


