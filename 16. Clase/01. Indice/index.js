import mongoose from "mongoose";
import fs from "fs";

import userModel from "./users.model.js";

const seedData = async () => {

    const data = JSON.parse(fs.readFileSync("./Users.json"));
    const response = await userModel.insertMany(data);
    //console.log(response);

}

const queryData = async () => {

    const response = await userModel
    .find({first_name: "Celia"})
    .explain("executionStats");

    console.log(response.executionStats);
}

const MONGO = "mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderPractica"

const main = async () => {

    await mongoose.connect(MONGO);
    //await seedData();
    await queryData();

    mongoose.connection.close();

};

main();