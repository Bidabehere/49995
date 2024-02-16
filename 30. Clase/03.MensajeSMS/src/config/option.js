import dotenv from "dotenv";

dotenv.config();

export const options = {
    server:{
        PORT: process.env.PORT
    },
    gmail:{
    adminAccount: process.env.ADMIN_EMAIL,
    adminPass: process.env.ADMIN_PASS
    },
    twilio:{
        twilio_id: process.env.TWILIO_ID,
        twilio_token: process.env.TWILIO_TOKEN,
        twilio_phone: process.env.TWILIO_PHONE
    }
}