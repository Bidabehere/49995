import __dirname from "../utils/index.js";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";


const swaggerOptions = {
    definition:{
        openapi:"3.0.1",
        info:{
            title:"Documentación api mascotas",
            version: "1.0.0",
            description:"Definicion de endpoints para la API de mascotas"
        }
    },
    apis:[`${path.join(__dirname,"../docs/**/*.yaml")}`], //Archivos con las especificaciones de las rutas.
};


export const swaggerSpecs = swaggerJsDoc(swaggerOptions);