import express from 'express';
import routes from './routes/index';
import 'reflect-metadata'
import './database';
const app = express();

app.use(express.json());
app.use(routes);

app.get('/',(request,response)=>{
    return response.json({message:'Hello Mateus!'})
})

app.listen(3333,()=>console.log("Iniciei PORRAAA!"));

