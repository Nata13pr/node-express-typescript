import {DocumentDefinition, FilterQuery, UpdateQuery} from 'mongoose';
import TodoColumn, {TodoDocument} from '../dataBase/Todo';
import {UserDocument} from "../dataBase/User";

export default {
    findColumns: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.find(params);
    },
    createColumn: (user: DocumentDefinition<TodoDocument>) => {
        return TodoColumn.TodoColumnModel.create(user);
    },
    findOneColumn: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.findOne(params);
    },
    updateOneColumn: (params: FilterQuery<UserDocument>, userData: UpdateQuery<TodoDocument>, options = {new: true}) => {
        return TodoColumn.TodoColumnModel.findOneAndUpdate(userData);
    },
    deleteOneColumn: (params: FilterQuery<UserDocument>) => {
        return TodoColumn.TodoColumnModel.deleteOne(params);
    },
}
