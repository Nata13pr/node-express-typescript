import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';
import { User, UserDocument } from '../dataBase/User';
import CError from '../error/CustomError';
import { hashPassword } from '../services/password.service';
import {
    updateOneUser,
    findUsers,
    findOneUser,
    deleteOneUser,
} from '../services/user.service';

async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const hashedPassword = await hashPassword(req.body.password);

        const user: UserDocument = await User.create({ ...req.body, password: hashedPassword });

        res.status(201).json(user);
    } catch (e) {
        next(e);
    }
}


export {
    createUser,
};
