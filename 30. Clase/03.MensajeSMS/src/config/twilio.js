import twilio from "twilio";
import { options } from "./option.js"; 


//Credenciales
const twilioAccountId = options.twilio.twilio_id;
const twilioToken = options.twilio.twilio_token;

//telefono
export const twilioPhone = options.twilio.twilio_phone;

//crear el cliente twilio
export const twilioClient = twilio(twilioAccountId,twilioToken);