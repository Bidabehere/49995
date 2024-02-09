

export const getAllOrders = async (req,res) =>{
    try {
    res.send({status:"success", payload:"getAllOrders"})        
    } catch (error) {
        res.send({status:"error", message:error.message})
    }

}
export const getOrdersById = async (req,res) =>{
    try {
        res.send({status:"success", payload:"getOrdersById"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }  
}
export const createOrder = async (req,res) =>{
    try {
        res.send({status:"success", payload:"createOrder"})        
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