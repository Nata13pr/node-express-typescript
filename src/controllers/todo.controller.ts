import {Request, Response, NextFunction} from 'express';

import User from '../dataBase/User';

import {hashPassword} from '../services/password.service';


async function createColumn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const hashedPassword = await hashPassword(req.body.password);

        const user = await User.create({...req.body, password: hashedPassword});
        res.status(201).json(user);
    } catch (e) {
        next(e);
    }
}


export {
    createColumn,
};
