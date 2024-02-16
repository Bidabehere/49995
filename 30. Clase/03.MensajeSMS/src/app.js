import path from "path";
import express from "express";

import { transporter } from "./config/gmail.js";
import { options } from "./config/option.js";
import  __dirname  from "./utils.js";
import { twilioPhone, twilioClient } from "./config/twilio.js";


const PORT = options.server.PORT || 8080;

const app = express();

app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=> console.log(`Server funcionando en el puerto: ${PORT}`));

const emailTemplate = `<div>
<h1>Bienvenido!!</h1>
<img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
<p>Ya puedes empezar a usar nuestros servicios</p>
<img width="100px" src="cid:perrito">
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
            html: emailTemplate,
            attachments:[
                {
                    filename:"descarga.jpg",
                    path: path.join(__dirname,"/images/descarga.jpg"),
                    cid:"perrito"
                },
                {
                    filename:"Ver.pdf",
                    path: path.join(__dirname,"/images/Ver.pdf")
                }
            ]
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


app.post("/compra", async (req,res)=>{
  
    try {
        const { nombre, producto} = req.query;
        //crear mensaje
        const message = await twilioClient.messages.create({
            body:`Gracias. ${nombre}, tu compra del producto ${producto} ha sido aprobada`,
            from: twilioPhone,
            to:"+54 3329 529116"
        });
        console.log("message", message);
        res.json({
            status:"success",
            message: "compra exitosa y envio de sms exitoso"
        })
        
    } catch (error) {
        console.log(error.message);
        res.json({
            status:"error",
            message:"Hubo un error al tratar de realizar la compra"
        })
    }

})