import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    telefono:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
});


export const contactsModel = mongoose.model(contactsCollection,contactsSchema);