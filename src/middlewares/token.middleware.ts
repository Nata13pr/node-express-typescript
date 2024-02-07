import { Request, Response, NextFunction } from 'express';
import CustomError from '../error/CustomError';
import { findAll as findAllValidator } from '../validators/query.validator';

export const isUserQueryValid = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { error, value } = await findAllValidator.validate(req.query);

        if (error) {
            return next(new CustomError(error.details[0].message));
        }

        req.query = value;
        next();
    } catch (e) {
        next(e);
    }
};
