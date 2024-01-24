// import {Schema,model,Document,Model}from 'mongoose';
//
// export type UserModel = Document &{
//     name:string;
//     email:string;
//     password:string;
// }
//
// interface  IUser extends  IUserFields,Document{};
//
// const userSchema=new Schema<IUser>({
//     name:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     email:{
//         type:String,
//         unique:true,
//         required:true,
//         trim:true,
//         lowercase:true,
//     },
//     password:{
//         type:String,
//         required:true
//     },
// },{timestamps:true});
//
// // const UserModel:Model<IUser>=model<IUser>('users',userSchema);
// //
// // export default UserModel;
// export default model<UserModel>("User", userSchema);
export type UserDocument=IUser & Document;
import {Schema,model,Document,Model}from 'mongoose';

interface IUser extends Document{
    name:string;
    email:string;
    password:string;
}

const UserSchema = new Schema<IUser>({
    name:{
        type:String,
        required:true,
        // trim:true,
    },
    email:{
        type:String,
        // unique:true,
        required:true,
        // trim:true,
        // lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true});

const UserModel = model('user',UserSchema)

export default UserModel;
