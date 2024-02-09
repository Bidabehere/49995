import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    nombre:String,
    correo:String,
    rol:String,
    pedidos:[
        {
            type:mongoose.SchemaTypes.ObjectId,
            ref: "orders"
        }
    ]
})
export const usersModel = mongoose.model("users", usersSchema);