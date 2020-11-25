import   Agendamento            from './../models/Agendamento'
import   AgendamentoRepositorio from './../repositorios/agendamentoRepositorio'
import { startOfHour          } from 'date-fns';
import { getCustomRepository  } from 'typeorm';

interface Request{
    provider_id:string;
    date:Date;
}

class CreateAgendamentoService{
    public async execute({provider_id,date}:Request):Promise<Agendamento>{
        const agendamentoRepositorio = getCustomRepository(AgendamentoRepositorio)
        
        const agendamentoDate = startOfHour(date);

        if(await agendamentoRepositorio.findByDate(agendamentoDate)){
            throw Error('Conflito de Horários')
        }
    
        const agendamento = agendamentoRepositorio.create({
        provider_id:provider_id,
        date:agendamentoDate
        })
        await agendamentoRepositorio.save(agendamento)
        return agendamento
    }
}

export default CreateAgendamentoService