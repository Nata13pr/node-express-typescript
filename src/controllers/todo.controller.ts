import {Request, Response, NextFunction} from 'express';

import TodoColumn from '../dataBase/Todo';

import {hashPassword} from '../services/password.service';


async function createColumn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log('!!!!!!!!!!!!!!',req.body)
        const {name} = req.body;

        const column = await TodoColumn.create({...req.body});
        res.status(201).json(name);
    } catch (e) {
        next(e);
    }
}


export {
    createColumn,
};
