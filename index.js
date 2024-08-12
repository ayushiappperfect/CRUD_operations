import express from 'express';
import { connection } from './postgress/postgress.js';
import router from './view/routes.js';
import cors from 'cors'

const app=express();
app.use(express.json())
app.use(router)    //middleware by express
app.use(cors())

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
});

connection();