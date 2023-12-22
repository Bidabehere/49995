import mongoose from "mongoose";

import studenModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";




const createStudent = async () => {
    await studenModel.create({
        first_name:"Adda",
        last_name:"Cupitt",
        email:"acupitt2s@sbwire.com",
        gender:"Female"
    })
};

const createCourse = async () => {
    await courseModel.create({
        title: "Programacion BackEnd",
        description: "Curso de desarrollo",
        difficulty: 5,
        topics: ["nodeJS", "Express", "Mongo"],
        professor: "Bidabehere Juan"
    });
}

const addCourseToStudent = async () =>{
    const student = await studenModel.findById("658240353c8a14ffbf3a411b");
    student.courses.push({course:"658240373c8a14ffbf3a411d"})
    await student.save()
}

const MONGO = "mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderCurso"
// Curso 658240373c8a14ffbf3a411d
//Estudiante 658240353c8a14ffbf3a411b


const main = async () => {

    await mongoose.connect(MONGO);
    //await createStudent(); 1 
    //await createCourse();  2
    //await addCourseToStudent(); 3

    const student = await studenModel.findById("658240353c8a14ffbf3a411b")

    console.log(JSON.stringify(student, null, "\t"))

    mongoose.connection.close();

};

main();