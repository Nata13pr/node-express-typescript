import {Request, Response, NextFunction} from 'express';
import TodoColumn, {TodoDocument, TodoItemDocument} from '../dataBase/Todo';
import {CreateColumnRequest, CreateItemRequest} from '../interfaces/Todo.interface'
import todoService from '../services/column.service'


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

        const {id} = req.params;

        await todoService.deleteOneColumn({_id: id});

        res.sendStatus(204);

    } catch (e) {
        next(e);
    }
}

async function findAllColumns(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await todoService.findColumns(req.query)

        res.json(users)
    } catch (e) {
        next(e)
    }
}

async function refactorColumn(req: Request, res: Response, next: NextFunction) {
    try {
        const {id} = req.params;
        const updatedUser = await todoService.updateOneColumn(
            {_id: id},
            req.body as Partial<TodoDocument>
        );
        res.status(201).json(updatedUser);
    } catch (e) {
        next(e)
    }
}

async function createItem(req: CreateItemRequest, res: Response, next: NextFunction): Promise<void> {
    try {
        const {_id} = req.user!;

        const {column, text} = req.body!;

        if (!_id) {
            throw new Error('User _id is undefined');
        }

         await todoService.createItem({
            private: false,
            creatorId: _id,
            column,
            text,
        });

        // const columnId = await todoService.findColumnById(column)

        // await todoService.updateOn5eColumn(
        //     {_id: columnId},
        //     {$push: {todos: item._id}}
        // );
        // const columnWithTodos = await TodoColumn.TodoColumnModel.findById(columnId)

        res.status(201).json("columnWithTodos");

    } catch (e) {
        next(e);
    }
}

async function deleteItem(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

        const {id} = req.params;

        const todoInformation = await todoService.findByIdItem({_id: id})

await todoService.deleteOneItem({_id:id})

        const {column} = todoInformation;

        const updatedColumn = await todoService.updateOneColumn(
            { _id: column },
            { $pull: { todos: { _id: id } } }
        );

        res.status(201).json(updatedColumn);

    } catch (e) {
        next(e);
    }
}

async function updateItem(req: CreateItemRequest, res: Response, next: NextFunction): Promise<void> {
    try {

        // const {itemId} = req.params;
        //
        // const {column, text} = req.body!;
        //
        // // if (!_id) {
        // //     throw new Error('User _id is undefined');
        // // }
        //
        // const id = await todoService.findColumnById(column)
        // console.log('fffffffffffffffffff',id)
        // const updatedItem = await todoService.updateOneItem(
        //     {text},
        //     req.body as Partial<TodoItemDocument>
        // );
        // console.log('uuuuuuuuu',updatedItem)
        //
        // const updatedUser = await todoService.updateOneColumn(
        //     {_id: id, "todos._id": itemId},
        //     { $set: { "todos.$.text": text } },
        // );
        // { _id: columnId },
        // { name: newName },
        // { new: true }


        // await todoService.addItemToColumn(column, item);
        // console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuu', updatedUser)
        res.status(201).json('hhhh');

        // const {id} = req.params;
        //
        // const todoInformation=await todoService.findByIdItem({_id:id})
        //
        // const {column}=todoInformation;
        // const columnInfo = await TodoColumn.TodoColumnModel.findById(column);
        // const index = columnInfo.todos.findIndex((item:any) => item._id.toString() === id);
        // console.log('oooooooooooo',index)
        // const updatedUser = await todoService.updateOneColumn(
        //     {_id:column},
        //     { $pull: { todos: { _id: id} } }
        // );
        //


        // res.status(201).json(updatedUser);

    } catch (e) {
        next(e);
    }
}

export {
    createColumn,
    deleteColumn,
    findAllColumns,
    refactorColumn,
    createItem,
    deleteItem,
    updateItem
};
