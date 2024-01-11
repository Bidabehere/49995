import { Router } from 'express';
import ProductManager from '../dao/dbManager/ProductManagerDB.js';

const router = Router();
const productManager = new ProductManager();

router.get('/', async (req,res) => {
    const products = await productManager.getProducts();
    res.render('home', {products});
    
})

router.get('/realtimeproducts', async (req,res)=> {
    res.render('realtimeproducts');
})

router.get('/products', async (req, res) => {
    try {

        const { limit = 10, page = 1, sort = '', query = '' } = req.query;
        const products = await productManager.getProducts( limit, page, sort, query);
        console.log(products);
        
        return res.render('products', {products});

    } catch (error) {
      console.log('Error:', error);
      res.status(500).send('Internal Server Error');
    }
});

router.get('/products/:pid', async (req, res) => {
    const productId = req.params.pid;
    const product = await prodDB.getProductById(productId);
    res.render('product', { product: product });
});



router.get('/carts/:cid', async (req, res) => {
    const cartId = req.params.cid;
    const cart = await cartManagerDb.getCartById(cartId);
    res.render('cart', { cart: cart });
});

export { router as viewsRoute};