import {DocumentDefinition, FilterQuery, UpdateQuery} from 'mongoose';
import TodoColumn, {TodoDocument, TodoItemDocument} from '../dataBase/Todo';
import CustomError from "../error/CustomError";
import {UserDocument} from "../dataBase/User";


export default {
    findColumns: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.find(params);
    },
    createColumn: (column: DocumentDefinition<TodoDocument>) => {
        return TodoColumn.TodoColumnModel.create(column);
    },
    findOneColumn: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.findOne(params);
    },
    updateOneColumn: (params: FilterQuery<UserDocument>, userData: UpdateQuery<TodoDocument>, options = {new: true}) => {
        return TodoColumn.TodoColumnModel.findOneAndUpdate(userData);
    },
    updateOn5eColumn: (params: FilterQuery<UserDocument>, userData: UpdateQuery<TodoDocument>, options = {new: true}) => {
        return TodoColumn.TodoColumnModel.findOneAndUpdate(userData);
    },
    deleteOneColumn: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.deleteOne(params);
    },
    findColumnById:(params: FilterQuery<UserDocument>)=>{
    return TodoColumn.TodoColumnModel.findById(params);
},
    addItemToColumn: async (columnId: string, item: TodoItemDocument): Promise<void> => {
        try {

            const column = await TodoColumn.TodoColumnModel.findById(columnId);
            if (!column) {
                throw new Error('Column not found');
            }

            column.todos.push(item);

            await column.save();
        } catch (error:any) {
            throw new CustomError(`Failed to add item to column: ${error.message}`);
        }
    },
    createItem: (item: DocumentDefinition<TodoItemDocument>) => {
        return TodoColumn.TodoItemModel.create(item);
    },
    findOneItem: (params: FilterQuery<TodoItemDocument>) => {
        return TodoColumn.TodoItemModel.findOne(params);
    },
    findByIdItem: (params: FilterQuery<TodoItemDocument>) => {
        return TodoColumn.TodoItemModel.findById(params);
    },
    updateOneItem: (params: any, userData: UpdateQuery<TodoItemDocument>, options = {new: true}) => {
        return TodoColumn.TodoItemModel.findOneAndUpdate(userData);
    },
    deleteOneItem: (params: FilterQuery<TodoItemDocument>) => {
        return TodoColumn.TodoItemModel.deleteOne(params);
    },
    deleteItemFromColumn:async (columnId: string, itemId: string)=>{
        try {

            const column = await TodoColumn.TodoColumnModel.findById(columnId);
            console.log('сссссщщ',column)
            if (!column) {
                throw new Error('Column not found');
            }

           column.todos = await column.todos.filter((item:any)=>item._id!==itemId)
            await column.save();

        } catch (error:any) {
            throw new CustomError(`Failed to add item to column: ${error.message}`);
        }
    }
}
