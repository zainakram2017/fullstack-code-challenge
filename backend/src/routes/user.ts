import { Router } from 'express';

import { type Route } from '../utils/types/index';
import { signUp, getAllUsers } from '../controllers/user';

const router = Router();

const userRoute: Route[] = [
    {
        method: 'get',
        route: '/',
        middlewares: [],
        controller: getAllUsers
    },
    {
        method: 'post',
        route: '/',
        middlewares: [],
        controller: signUp
    }
];

userRoute.forEach(route => {
    router[route.method](route.route, route.middlewares, route.controller);
});

export { router as userRoutes};

