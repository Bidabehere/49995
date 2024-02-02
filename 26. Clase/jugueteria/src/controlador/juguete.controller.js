import { JugueteService } from "../servicio/juguetes.sevice.js";

class JugueteController{
    static getJuguete = async (req,res) =>{
        const juguetes = JugueteService.getJuguetes();
        res.json({status:"success",data:juguetes})
    };
    static saveJuguete = (req,res) => {
        const result = JugueteService.saveJuguete(req.body);
        res.json({status:"success", message:result});
    }
}

export { JugueteController };