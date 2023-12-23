import cartsModel from "../models/cart.models.js";
import productsModel from "../models/products.models.js";

class CartManagerDB {

    getCarts = async () => {
        const carts = await cartsModel.find()
        return carts;
    }
    getCartByID = async (cid) => {
        const cart = await cartsModel.find({_id:cid})
        return cart;
    }
    createCart = async () => {
        const cart = await cartsModel.create();
        return cart;
    }
    addProductInCart = async (cid, pid, quantity = 1) => {
        const cart = await cartsModel.findOne({_id:cid});
        if (!cart){
            return {
                status: "error",
                msg: `El carrito con el id ${cid} no existe`
            } 
        };
        const product = await productsModel.findOne({_id:pid});
        if (!product){
            return {
                status: "error",
                msg: `El producto con el id ${pid} no existe`
            } 
        };
        let productsInCart = cart.product;
        
        const indexProduct = productsInCart.findIndex((product)=> product.product == pid );

        if(indexProduct == -1){
            const newProduct = {
                product: pid,
                quantity: quantity
            }
            cart.product.push(newProduct);
        }else{
            cart.product[indexProduct].quantity += quantity;
        }
           
        await cart.save();
        
        return cart;
    
    }
}

export {CartManagerDB};