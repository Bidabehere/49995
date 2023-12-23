import express from 'express';
import { cartRouter } from './routes/carts.routes.js';
import { productRouter } from './routes/products.routes.js';
import mongoose from 'mongoose';

const MONGO = 'mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/Coder51185';

const connection = mongoose.connect(MONGO);


const PORT = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
})


//Rutas
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);