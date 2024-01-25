import { Request, Response, NextFunction } from 'express';
import  CustomError  from '../error/CustomError';
import { newUserValidator } from '../validators/user.validator';
import User from '../dataBase/User';
import {CustomRequest,ReqUser} from '../interfaces/User.interface'


export const isNewUserValid = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { error, value } = newUserValidator.validate(req.body);

        if (error) {
            throw new CustomError(error.details[0].message);
        }

        req.body = value;
        next();
    } catch (e) {
        next(e);
    }
};

export const isEmailRegistered = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        const userByEmail = await User.findOne({ email });

        if (userByEmail) {
            throw new CustomError(`User with such email is already registered`, 409);
        }

        next();
    } catch (e) {
        next(e);
    }
};

export const checkIsUserPresent = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const { email } = req.body;
        const userByEmail = await User.findOne({ email });

        if (!userByEmail) {
            throw new CustomError(`User not found`, 404);
        }

       req.user = userByEmail as ReqUser;
        next();
    } catch (e) {
        next(e);
    }
};
