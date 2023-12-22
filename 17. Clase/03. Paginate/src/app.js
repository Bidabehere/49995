import express from "express";
import mongoose from "mongoose";
import { engine } from "express-handlebars";

import studentModel from "./models/students.model.js";
const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderAggregation';

const app = express();
mongoose.connect(MONGO);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views")

app.get("/students", async (req,res)=>{
    const { page } = req.query;

    const students = await studentModel.paginate(
        {
            //Filtrado inicial
        },
        {
            limit: 5,
            lean: true,
            page: page ?? 1,
        }
    );

    res.render("students", {students} );

})

app.listen(8080, ()=>{
    console.log("Server listening on port 8080");
})
