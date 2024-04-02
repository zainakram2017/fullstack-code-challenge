import { Router } from 'express';

import { userRoutes } from './user';
import { questionRoutes } from './question';

const appRouter = Router();

appRouter.use('/user', userRoutes);
appRouter.use('/question', questionRoutes);

export { appRouter };
