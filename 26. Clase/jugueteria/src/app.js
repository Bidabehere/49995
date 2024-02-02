// Configuracion* -> Persistencia* -> Servicio*  -> controlador* -> ruta -> app
import  express  from "express";
import { options } from "./config/config.js";
import { jugueteRouter } from "./rutas/juguetes.route.js";
import { usersRouter } from "./rutas/users.route.js"

const app = express();
const PORT = options.server.port;

//middleware
app.use(express.json());

app.listen(PORT, ()=>console.log(`Servidor funcionando en el puerto: ${PORT}`));

//Rutas
app.use("/api/users", usersRouter);
app.use("/api/juguetes", jugueteRouter);