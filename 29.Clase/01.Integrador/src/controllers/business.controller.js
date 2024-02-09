
export const getAllBusiness = async (req,res)=>{
    try {
        res.send({status:"success", payload:"getAllBusiness"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const getBusinessById = async (req,res)=>{
    try {
        res.send({status:"success", payload:"getBusinessById"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const createBusiness = async (req,res)=>{
    try {
        res.send({status:"success", payload:"createBusiness"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
export const addProduct = async (req,res)=>{
    try {
        res.send({status:"success", payload:"addProduct"})        
        } catch (error) {
            res.send({status:"error", message:error.message})
        }
}
