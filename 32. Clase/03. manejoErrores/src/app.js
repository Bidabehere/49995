import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { usersRouter } from "./routes/user.route.js";

const PORT = 8080;
const app = express();
app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));

//midleware
app.use(express.json());

//router
app.use("/api/users", usersRouter);
app.use(errorHandler);