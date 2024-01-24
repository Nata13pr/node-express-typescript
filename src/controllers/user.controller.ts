import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';
 import  User, {UserDocument } from '../dataBase/User';
import CError from '../error/CustomError';
import { hashPassword } from '../services/password.service';
import UserService from  '../services/user.service'
// import {
//     updateOneUser,
//     findUsers,
//     findOneUser,
//     deleteOneUser,
// } from '../services/user.service';

async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const hashedPassword = await hashPassword(req.body.password);

        const user = await User.create({ ...req.body, password: hashedPassword });
        console.log('in create user',user)
         res.status(201).json(user);
    } catch (e) {
        next(e);
    }
}


export {
    createUser,
};
