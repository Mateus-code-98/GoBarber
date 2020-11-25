import { Router                 } from 'express';

const sessionRouter = Router();

sessionRouter.post('/', async (request,response)=>{
    try{
        const {email,password} = request.body;
        
        return response.json({message:"Beleza Man!"})
    }catch(error){return response.status(400).json({error:error.message})}
})

export default sessionRouter;