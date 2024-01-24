import { DocumentDefinition, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import User, { UserDocument } from '../dataBase/User';

export default {
    findUsers: (params: FilterQuery<UserDocument> = {}) => {
        return User.find(params);
    },
    findOneUser: (params: FilterQuery<UserDocument> = {}) => {
        return User.findOne(params);
    },

    createUser: (user: DocumentDefinition<UserDocument>) => {
        return User.create(user);
    },

    updateOneUser: (
        filter: FilterQuery<UserDocument>,
        update: UpdateQuery<UserDocument>,
        options: QueryOptions = { new: true }
    ) => {
        return User.findOneAndUpdate(filter, update, options);
    },

    deleteOneUser: (params: FilterQuery<UserDocument>) => {
        return User.deleteOne(params);
    },
};
