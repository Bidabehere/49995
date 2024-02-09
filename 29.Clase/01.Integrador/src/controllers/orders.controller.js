import { ordersDao, usersDao, businessDao } from "../dao/index.js"
import { v4 as uuidv4 } from "uuid";

export const getAllOrders = async (req,res) =>{
    try {
        const orders = await ordersDao.getAllOrders()
    res.send({status:"success", payload:orders})        
    } catch (error) {
        res.send({status:"error", message:error.message})
    }

}
export const getOrdersById = async (req,res) =>{
    try {
        const orderId = req.params.oid;
        const order = await ordersDao.getOrderById(orderId);
        res.send({status:"success", payload:order})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }  
}
export const createOrder = async (req,res) =>{
    try {
            const { userId, businessId, products} = req.body;
            const user = await usersDao.getUserById(userId);

            const total = products.reduce((acc,i)=>{
                acc+=i.precio;
                return acc;
            },0)

            const id = uuidv4;
            const newOrder = {
                numeroOrden: id,
                negocio: businessId,
                productos: products,
                precioTotal: total,
                estado:"pendiente"
            }
            const orderCreated = await ordersDao.createOrder(newOrder)
        res.send({status:"success", payload:orderCreated})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const resolveOrder = async (req,res) =>{
    try {
        res.send({status:"success", payload:"resolveOrder"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}