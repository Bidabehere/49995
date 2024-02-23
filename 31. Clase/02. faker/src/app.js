import express from "express";
import { usersRouter } from "./routes/user.route.js";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));

//rutas
app.use("/api/users", usersRouter);