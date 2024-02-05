import {Request, Response, NextFunction} from 'express';

import {hashPassword} from '../services/password.service';
import UserService from '../services/user.service'
//signup в аус
async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const hashedPassword = await hashPassword(req.body.password);

        const user = await UserService.createUser({
            ...req.body, password: hashedPassword
        });
        res.status(201).json(user);
    } catch (e) {
        next(e);
    }
}


export {
    createUser,
};
