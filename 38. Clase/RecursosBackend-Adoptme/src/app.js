import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { swaggerSpecs } from './config/docConfig.js';
import swaggerUi from "swagger-ui-express";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const MONGO_URL="mongodb+srv://bidabehere:bidabehere@cluster0.a5dcy.mongodb.net/CoderAdopme"

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(MONGO_URL)

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
//end point docu
app.use("/api/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpecs));

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))