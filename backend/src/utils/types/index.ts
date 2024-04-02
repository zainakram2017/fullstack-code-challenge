import { Request, Response, NextFunction } from 'express';

type Middleware = (req: Request, res: Response, next: NextFunction) => void;
type Controller = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;
type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export type Route = {
    method: HttpMethod;
    route: string;
    middlewares: Middleware[];
    controller: Controller;
};

export type DatabaseConfig = {
    DATABASE_URL: string;
}

export type Secret = {
    port: string;
    dbConfig: DatabaseConfig;
}

export type RequestObject = Request & {
    currentUser?: {
        id: string;
        username: string;
        email: string;
    };
}

export enum UserRoleEnum {
    ADMIN = 'admin',
    CLIENT = 'client',
    PATIENT = 'patient',
}