import mongoose, { mongo } from "mongoose";
import orderModel from "./order.model.js";
import orders from "./orders.js";





const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderAggregation';

const main = async () =>{

    await mongoose
            .connect(MONGO)
            .then((conn)=>{
                console.log("Mongo OnLine");
            })

    //await orderModel.insertMany(orders);


    const orders = await orderModel.aggregate([
        { $match: {size: "medium"} },
        { $group: {_id: "$name", totalQuantity: { $sum:"$quantity" }} },
        { $sort:  {totalQuantity: -1 } },
        { $group: {_id: 1, orders: { $push: "$$ROOT"}}},
        { 
            $project: {
                _id: 0,
                orders: "$orders",
            },
        },
        { $merge: { into: "reports" } }
    ])

    console.log(orders);
}

main()