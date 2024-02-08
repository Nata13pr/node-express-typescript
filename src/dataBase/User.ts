import {Schema, model, Document} from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    },
    someReference: {
        type: Schema.Types.ObjectId,
        ref: 'SomeModel',
    }
}, {timestamps: true});

const UserModel = model('user', UserSchema)

export default UserModel;
export type UserDocument = IUser & Document;
