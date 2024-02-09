import mongoose from "mongoose";


const businessSchema = new mongoose.Schema({
    nombre: String,
    productos: []
})

export const businessModel = mongoose.model("business", businessSchema);