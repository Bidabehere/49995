import express from "express";
import { options } from "./config/options.js";

import { ordersRouter } from "./routes/orders.routes.js"; 
import { usersRouter } from "./routes/users.routes.js"; 
import { businessRouter } from "./routes/business.routes.js";

const port = options.server.port || 8080;

const app = express()

//middleware
app.use(express.json());


//routes
app.use("/api/orders",ordersRouter);
app.use("/api/users",usersRouter);
app.use("/api/business",businessRouter);


app.listen(port, ()=>console.log(`Servidor funcionando en el puerto: ${port}`))