import { Router } from 'express';

import { UserRoleEnum, type Route } from '../utils/types/index';
import { signUp, getAllUsers, mockLogin } from '../controllers/user';
import { isAuthenticated, isAuthorized } from '../middlewares';

const router = Router();

const userRoute: Route[] = [
    {
        method: 'get',
        route: '/',
        middlewares: [isAuthenticated, isAuthorized([UserRoleEnum.ADMIN, UserRoleEnum.CLIENT])],
        controller: getAllUsers
    },
    {
        method: 'post',
        route: '/',
        middlewares: [isAuthenticated, isAuthorized([UserRoleEnum.ADMIN])],
        controller: signUp
    },
    {
        method: 'post',
        route: '/mock_login',
        middlewares: [],
        controller: mockLogin
    }
];

userRoute.forEach(route => {
    router[route.method](route.route, route.middlewares, route.controller);
});

export { router as userRoutes };

