import {Request, Response, NextFunction} from 'express';
import {isValidObjectId} from 'mongoose';

import CustomError from '../error/CustomError';
import {ColumnValidator,TodosValidator} from '../validators/todo.validator';
import todoService from '../services/column.service'

export const isColumnValid = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {

        const {error, value} = ColumnValidator.validate(req.body);

        if (error) {
            return next(new CustomError(error.details[0].message));
        }

        req.body = value;
        next();
    } catch (e) {
        next(e);
    }

};

export const isColumnUniq = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const {name} = req.body;

        if (name.length >= 10) {
            return next(new CustomError(`Column is too long`, 409));
        }

        const column = await todoService.findOneColumn({name});

        if (column) {
            return next(new CustomError(`Column with name ${name} already exists`, 409));
        }

        next();
    } catch (e) {
        next(e);
    }
};
export const isIdValid = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const {id} = req.params;

        if (!isValidObjectId(id)) {
            return next(new CustomError('Not valid ID'));
        }

        next();
    } catch (e) {
        next(e);
    }
};
export const isColumnPresent = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const {id} = req.params;

        const user = await todoService.findOneColumn({_id: id});
        if (!user) {
            return next(new CustomError('User not found', 404));
        }

        next();
    } catch (e) {
        next(e);
    }
};
export const isItemUniq = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {

        const {text} = req.body;

        if (text.length >= 10) {
            return next(new CustomError(`Column is too long`, 409));
        }

        const column = await todoService.findOneItem({text});

        if (column) {
            return next(new CustomError(`Column with text ${text} already exists`, 409));
        }

        next();
    } catch (e) {
        next(e);
    }
};

export const isItemValid = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {

        const {error, value} = TodosValidator.validate(req.body);

        if (error) {
            return next(new CustomError(error.details[0].message));
        }

        req.body = value;
        next();
    } catch (e) {
        next(e);
    }

};
