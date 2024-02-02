import mongoose from "mongoose";

//const MONGO = 'URL';
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185';


class ConnectionDB{
    static #intance;
    constructor(){
        mongoose.connect(MONGO)
    }
    static async getIntance(){
        if(ConnectionDB.#intance){
            console.log("Ya estas conectado");;
            return ConnectionDB.#intance
        }else{
            this.#intance = new ConnectionDB();
            console.log("ahora estas conectado a la base de datos");
            return this.#intance;
        }
    }

}

export { ConnectionDB };

