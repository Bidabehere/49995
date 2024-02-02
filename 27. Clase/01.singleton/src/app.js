import { ConnectionDB } from "./service/conectionDB.js"; 


const primerInstancia = ConnectionDB.getIntance()

const segundaInstancia = ConnectionDB.getIntance()

const terceraInstancia = ConnectionDB.getIntance()