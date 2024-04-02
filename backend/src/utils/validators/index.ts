import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';

import { HttpException } from '../exceptions/http';

export const validateRequest = async (body: any, rules: any) => {
    try {
        const schema = yup.object().shape(rules);
        await schema.validate(body, { abortEarly: false });

        return { isValid: true, error: { message: '', status: 200, data: [] } };
    } catch (error: any) {
        return {
            isValid: false,
            error: { message: error?.errors?.join('; '), status: 400, data: [] },
        };
    }
};

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

export const validateAndHandle =
    (schema: any, handler: RequestHandler) =>
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                const { isValid, error } = await validateRequest(
                    { ...req.params, ...req.body, ...req.query },
                    schema
                );
                if (isValid) {
                    handler(req, res, next);
                } else {
                    next(new HttpException(error.status, error.message, error.data));
                }
            } catch (error) {
                next(error);
            }
        };
