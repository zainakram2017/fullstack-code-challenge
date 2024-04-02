import { Router } from 'express';

import { userRoutes } from './user';

const appRouter = Router();

appRouter.use('/user', userRoutes);

export { appRouter };
