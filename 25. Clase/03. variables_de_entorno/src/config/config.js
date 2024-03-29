import dotenv from "dotenv";

dotenv.config();

//console.log(process.env);

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const CORREO_ADMIN = process.env.CORREO_ADMIN;
const PASSWORD_ADMIN = process.env.PASSWORD_ADMIN;
const JWT_WORD = process.env.JWT_WORD;

export const config = {
    server: {
        port: PORT
    },
    mongo:{
        url: MONGO_URL
    },
    auth:{
        account: CORREO_ADMIN,
        pass: PASSWORD_ADMIN
    },
    jwt:{
        word: JWT_WORD
    }
};
