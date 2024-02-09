import { connectDB } from "../config/dbConnection.js";
import { UserMongo } from "./managers/users.mongo.js"; 
import { BusinessMongo } from "./managers/business.mongo.js";
import { OrderMongo } from "./managers/orders.mongo.js";

connectDB();
export const usersDao = new UserMongo();
export const businessDao = new BusinessMongo();
export const ordersDao = new OrderMongo(); 