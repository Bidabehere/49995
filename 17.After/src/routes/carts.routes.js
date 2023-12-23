import {Router} from "express";
import {CartManagerDB} from "../dao/dbManagers/CartManagerDB.js"

const router = Router();

const cartManagerMongo = new CartManagerDB();

router.get('/', async (req,res)=>{

    const carts = await cartManagerMongo.getCarts();

    res.send({
        status:"succes",
        carritos: carts
    })
})

router.get('/:cid', async (req,res)=>{
    const cid = req.params.cid;

    res.send({
        status:"succes",
        msg:`Ruta GET ID CART con ID: ${cid}`
    })
})
router.post('/', async (req,res)=>{ //creo
    const cart = await cartManagerMongo.createCart()
    res.send({
        status:"succes",
        msg: cart
    })
})
router.post('/:cid/product/:pid', async (req,res)=>{ //creo
    const cid = req.params.cid;
    const pid = req.params.pid;
    const quantity = req.body.quantity
    
    const cart = await cartManagerMongo.addProductInCart(pid,cid,quantity)

    res.send({
        status:"succes",
        msg: cart
    })
})
router.put('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    res.send({
        status:"succes",
        msg:`Ruta PUT de CART con ID: ${cid}`
    })
})
router.delete('/:cid', async (req,res)=>{
    const cid = req.params.cid;
    res.send({
        status:"succes",
        msg:`Ruta DELETE de CART con ID: ${cid}`
    })
})

export {router as cartRouter};