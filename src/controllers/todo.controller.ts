import {Request, Response, NextFunction} from 'express';

import Models from '../dataBase/Todo';
import {CreateColumnRequest} from '../interfaces/Todo.interface'
import {todoService} from '../services/column.service'


async function createColumn(req: CreateColumnRequest, res: Response, next: NextFunction): Promise<void> {
    try {
        const {_id} = req.user!;
        const {name} = req.body!;

        const column = await Models.TodoColumnModel.create({
            name,
            creatorId: _id,
        });
        res.status(201).json(column);

    } catch (e) {
        next(e);
    }
}

async function deleteColumn(req: any, res: Response, next: NextFunction): Promise<void> {
    try {

        const { id } = req.params;
        console.log('2222222222222',id)
        const del=await todoService.deleteOneColumn(  {_id:id } );
       const one= await todoService.findOneColumn(id)
        console.log('rrrrrrrrrrrr',one)
        console.log('dellllllllll',del)

        res.sendStatus( 204 );

    } catch (e) {
        next(e);
    }
}

export {
    createColumn,
    deleteColumn
};
