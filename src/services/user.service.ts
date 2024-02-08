import {DocumentDefinition} from 'mongoose';
import User, {UserDocument} from '../dataBase/User';

export default {
    createUser: (user: DocumentDefinition<UserDocument>) => {
        return User.create(user);
    },
};
