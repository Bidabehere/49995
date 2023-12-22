import mongoose from "mongoose";
import { students } from "./data.js";
import studentModel from "./students.model.js";


const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderAggregation';

const main = async () => {

    await mongoose.connect(MONGO);
    //await studentModel.insertMany(students);

    //1 
    const resultOne = await studentModel.aggregate([
        { $sort: { grade: -1 } }
    ])
    //console.log(resultOne);
    //2
    const resultTwo = await studentModel.aggregate([
        { $group: { _id:"$group", count: { $count: {} } } }
    ])
    console.log(resultTwo);
    //3
    const resultThree = await studentModel.aggregate([
        { $match: { group: "1B" }  },
        { $group: {_id: "1B", avg: { $avg: "$grade" } } }
    ])
    console.log(resultThree);
    //4
    const resultFour = await studentModel.aggregate([
        { $match: { group: "1A" }  },
        { $group: {_id: "1A", avg: { $avg: "$grade" } } }
    ])
    console.log(resultFour);
    //5
    const resultFive = await studentModel.aggregate([
        { $group: {_id:"all", avg: { $avg: "$grade" } } }
    ])
    console.log(resultFive);
    //6
    const resultSix = await studentModel.aggregate([
        { $match: {gender: "Male"} },
        { $group: { _id:"Male", avg: { $avg: "$grade" } } }
    ])
    console.log(resultSix);
    //7
    const resultSeven = await studentModel.aggregate([
        { $match: {gender: "Female"} },
        { $group: { _id:"Female", avg: { $avg: "$grade" } } }
    ])
    console.log(resultSeven);

    await mongoose.connection.close();
}

main();