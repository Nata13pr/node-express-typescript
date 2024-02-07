// import { Model, Document, Schema, UpdateQuery } from 'mongoose';
// // import  TodoColumn  from '../dataBase/Todo'; // Adjust the path based on your actual file structure
//
//
// interface IUser extends Document {
//     // Define your user schema fields here
// }
//
// export interface IUpdateOptions {
//     new?: boolean;
// }
//
//
// interface IUserService {
//     findColumns: (params: Record<string, any>) => Promise<IUser[]>;
//     findOneColumn: (params: Record<string, any>) => Promise<IUser | null>;
//     createColumn: (user: typeof TodoColumn) => Promise<IUser>;
//     updateOneColumn: (
//         params: Record<string, any>,
//         userData: UpdateQuery<IUser>,
//         options: IUpdateOptions
//     ) => Promise<IUser | null>;
//     deleteOneUser: (params: Record<string, any>) => Promise<void>;
// }
//
// export const todoService: IUserService = {
//     findColumns: (params) => TodoColumn.TodoModel.find(params).exec(),
//     findOneColumn: (params) => TodoColumn.TodoModel.findOne(params).exec(),
//     createColumn: (user) => TodoColumn.TodoModel.create(user),
//     updateOneColumn: (params, userData, options) =>
//         TodoColumn.TodoModel.findOneAndUpdate(params, userData, options).exec(),
//     deleteOneUser: (params) => TodoColumn.TodoModel.deleteOne(params).exec(),
// };

import {DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions} from 'mongoose';
import TodoColumn, {TodoDocument} from '../dataBase/Todo';
import  {UserDocument} from "../dataBase/User";

export default {
    findColumns : ( params: FilterQuery<UserDocument> ) => {
        return TodoColumn.TodoColumnModel.find( params );
    },
    createColumn: (user: DocumentDefinition<TodoDocument>) => {
        return TodoColumn.TodoColumnModel.create(user);
    },
    findOneColumn : ( params:FilterQuery<UserDocument> ) => {
        return TodoColumn.TodoColumnModel.findOne( params );
    },
    updateOneColumn : ( params:FilterQuery<UserDocument>, userData:UpdateQuery<TodoDocument>, options = { new : true } ) => {
        return TodoColumn.TodoColumnModel.findOneAndUpdate( userData );
    },
    deleteOneColumn: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.deleteOne(params);
    },


}
// import { Model, Document, Schema, UpdateQuery } from 'mongoose';
// import TodoColumn, {Todo} from '../dataBase/Todo';
// import * as Mongoose from "mongoose";

//
// interface IUser extends Document {
//     // Define your user schema fields here
// }
//
// export interface IUpdateOptions {
//     new?: boolean;
// }
//
// interface IUserService {
//     // findColumns: (params: Record<string, any>) => Promise<IUser[]>;
//     findOneColumn: (params: Record<string, any>) =>Promise<IUser>;
//     createColumn: (user: IUser) => Promise<IUser>;
//     // updateOneColumn: (
//     //     params: Record<string, any>,
//     //     userData: UpdateQuery<IUser>,
//     //     options: IUpdateOptions
//     // ) => Promise<IUser | null>;
//     deleteOneColumn: (params: string) => Promise<(Todo & Document<any, any, any>) | null>;
// }
//
// export const todoService: IUserService = {
//     // findColumns: (params) => TodoColumn.TodoModel.find(params).exec(),
//     findOneColumn: (params) => TodoColumn.TodoModel.findOne(params),
//     createColumn: (user) => TodoColumn.TodoModel.create(user),
//     // updateOneColumn: (params, userData, options) =>
//     //     TodoColumn.TodoModel.findOneAndUpdate(params, userData, options).exec(),
//     deleteOneColumn: (params) => TodoColumn.TodoModel.findByIdAndRemove(params).exec(),
// };
