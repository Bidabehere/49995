import { JugueteDB } from "../persistencia/juguetes.js";

const jugueteDB = new JugueteDB();

class JugueteService{
    static getJuguetes = () =>{
        const juguetes = jugueteDB.get();
        return juguetes
    } 
    static saveJuguete = (juguete) =>{
        const result = jugueteDB.save(juguete);
        return result;
    }
}

export { JugueteService };