import nodemailer from "nodemailer";
import { options } from "./option.js";

//credenciales
const adminEmail = options.gmail.adminAccount;
const adminPass = options.gmail.adminPass;

//console.log(adminEmail);

//configurar el canal de comunicacion entre node y gmail

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:adminEmail,
        pass:adminPass
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
})

export { transporter };