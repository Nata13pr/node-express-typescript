import { Model, Document, Schema, UpdateQuery } from 'mongoose';
import  TodoColumn  from '../dataBase/Todo'; // Adjust the path based on your actual file structure

interface IUser extends Document {
    // Define your user schema fields here
}

export interface IUpdateOptions {
    new?: boolean;
}

interface IUserService {
    findColumns: (params: Record<string, any>) => Promise<IUser[]>;
    findOneColumn: (params: Record<string, any>) => Promise<IUser | null>;
    createColumn: (user: IUser) => Promise<IUser>;
    updateOneColumn: (
        params: Record<string, any>,
        userData: UpdateQuery<IUser>,
        options: IUpdateOptions
    ) => Promise<IUser | null>;
    deleteOneColumn: (params: Record<string, any>) => Promise<void>;
}

export const todoService: IUserService = {
    findColumns: (params) => TodoColumn.TodoModel.find(params).exec(),
    findOneColumn: (params) => TodoColumn.TodoModel.findOne(params).exec(),
    createColumn: (user) => TodoColumn.TodoModel.create(user),
    updateOneColumn: (params, userData, options) =>
        TodoColumn.TodoModel.findOneAndUpdate(params, userData, options).exec(),
    deleteOneColumn: (params) => TodoColumn.TodoModel.deleteOne(params).exec(),
};
