import { Router } from 'express';
import agendamentosRouter from './agendamentos.routes';
import sessionRouter      from './sessions.route';
import usersRouter        from './users.route';

const routes = Router();

routes.use('/agendamentos', agendamentosRouter);
routes.use('/users'       , usersRouter);
routes.use('/session'     , sessionRouter)

export default routes;