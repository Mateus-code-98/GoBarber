import { getCustomRepository    } from 'typeorm';
import { Router                 } from 'express';
import { parseISO               } from 'date-fns';
import   CreateAgendamentoService from './../services/CreateAgendamentoService'
import   AgendamentoRepositorio   from '../repositorios/agendamentoRepositorio';

const agendamentosRouter = Router();

agendamentosRouter.get('/',async (request,response)=>{
    const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio)
    const agendamentos = await agendamentoRepositorio.find()
    return response.json(agendamentos)
})

agendamentosRouter.post('/', async (request,response)=>{
    try{
        const { provider_id , date} = request.body
        const parseData = parseISO(date)
        const createAgendamento = new CreateAgendamentoService()
        const agendamento = await createAgendamento.execute({
            date:parseData,
            provider_id:provider_id
        })
        return response.json(agendamento)
    }catch(error){return response.status(400).json({error:error.message})}
})

export default agendamentosRouter;