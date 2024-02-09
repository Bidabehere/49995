import { ordersModel } from "../models/orders.model.js";


export class OrderMongo{
    constructor(){
        this.model = ordersModel;
    };
    async getAllOrders(){
        try {
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getOrderById(id){
        try {
            const order = await this.model.findById(id);
            if(!order){
                throw new Error(`No existe la orden con el id: ${id}`)
            }
            return order;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createOrder(order){
        try {
            const orderCreated = await this.model.create(order);
            return orderCreated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateOrder(id,order){
        try {
            const orderUpdate = await this.model.findByIdAndUpdate(id,order, {new:true});
            return orderUpdate;
        } catch (error) {
            throw new Error(error.message)
        }
    }

}