import { Response, NextFunction } from 'express';

import { PrismaClient } from '@prisma/client';

import { HttpException } from '../utils/exceptions/http';
import { RequestObject } from '../utils/types';
import { generateToken } from '../utils/helperFunctions';
import { TokenPayload } from '../utils/types';


const prisma = new PrismaClient();

export const signUpHandler = async (req: RequestObject, res: Response, next: NextFunction) => {
    try {
        const { username, name, email, role } = req.body;

        const user = await prisma.user.create({
            data: {
                username,
                name,
                email,
                role,
            },
        });

        return res.status(201).json(user);
    } catch (error: any) {
        next(new HttpException(400, error?.message, error));
    }
};

export const getAllUsersHandler = async (req: RequestObject, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
    } catch (error: any) {
        next(new HttpException(400, error?.message, error));
    }
};

export const mockLoginHandler = async (req: RequestObject, res: Response, next: NextFunction) => {
    try {
        const { username } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                username,
            },
            select: {
                uuid: true,
                username: true,
                email: true,
                name: true,
                role: true,
            }
        });
        console.log(user);
        if (!user) {
            next(new HttpException(404, 'User not found', []));
        }
        const token = generateToken(user as TokenPayload);
        return res.status(200).json({
            'access_token': token,
            'token_type': 'Bearer',
        });
    } catch (error: any) {
        next(new HttpException(400, error?.message, error));
    }
};