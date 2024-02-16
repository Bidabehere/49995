import express from "express";

import { transporter } from "./config/gmail.js";
import { options } from "./config/option.js";

const PORT = options.server.PORT || 8080;

const app = express();

app.listen(PORT, ()=> console.log(`Server funcionando en el puerto: ${PORT}`));

const emailTemplate = `<div>
<h1>Bienvenido!!</h1>
<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
<p>Ya puedes empezar a usar nuestros servicios</p>
<a href="https://www.google.com/">Explorar</a>
</div>`;

app.post("/registro", async (req,res)=>{
    const emailUsu = "bidabehere@gmail.com";
    try {
        
        const contenido = await transporter.sendMail({
            //Estructura del correo
            from: "Ecommerce CoderCommers",
            to:emailUsu,
            subject:"Registro exitoso",
            html: emailTemplate
        })
        console.log("Contenido", contenido);
        res.json({
            status:"success",
            message:"Registro exitoso"
        });

    } catch (error) {
        console.log(error.message);
        res.json({
            status:"error",
            message:"Hubo un error al tratar de registrarce"
        })
    }

})
