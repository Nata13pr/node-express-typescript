import {Request, Response, NextFunction} from 'express';

import Models, {TodoDocument} from '../dataBase/Todo';
import {CreateColumnRequest} from '../interfaces/Todo.interface'
import todoService from '../services/column.service'
import * as mongoose from "mongoose";


async function createColumn(req: CreateColumnRequest, res: Response, next: NextFunction): Promise<void> {
    try {
        const {_id} = req.user!;

        const {name} = req.body!;

        if (!_id) {
            throw new Error('User _id is undefined');
        }

        const column = await todoService.createColumn({
            name,
            creatorId: _id,
            todos: []
        });

        res.status(201).json(column);

    } catch (e) {
        next(e);
    }
}

async function deleteColumn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const { id } = req.params;

       await todoService.deleteOneColumn({_id:id} );

        res.sendStatus( 204 );

    } catch (e) {
        next(e);
    }
}

async function findAllColumns(req:Request,res:Response,next:NextFunction):Promise<void>{
    try{
const users=await todoService.findColumns(req.query)
       res.json(users)
    }
    catch (e) {
        next(e)
    }
}
async function refactorColumn(req: Request, res: Response, next: NextFunction){
    try{
        const { id } = req.params;
        const updatedUser = await todoService.updateOneColumn(
            { _id: id },
            req.body as Partial<TodoDocument>
        );
        res.status( 201 ).json( updatedUser );
    }
    catch(e){
        next(e)
    }
}
export {
    createColumn,
    deleteColumn,
    findAllColumns,
    refactorColumn
};
