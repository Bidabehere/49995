import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    numeroOrden: String,
    negocio:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "business"
    },
    usuario:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    productos:[],
    precioTotal:Number,
    estado:{
        type:String,
        enum:["pendiente","completado","cancelado"],
        default:"pendiente"
    }
})

export const ordersModel = mongoose.model("orders", ordersSchema);

