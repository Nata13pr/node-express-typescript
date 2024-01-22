import {Schema,model,Document}from 'mongoose';

interface OAuthDocument extends Document{
    userId:Schema.Types.ObjectId;
    access_token:string;
    refresh_token:string;
}

const OAuthSchema=new Schema<OAuthDocument>(
    {
        userId:{
            type:Schema.Types.ObjectId,
            ref:'user',
            required:true,
        },
        access_token:{
            type:String,
            required:true,
        },
        refresh_token:{
            type:String,
            required:true,
        },
    },
    {timestamps:true}
);

export default model<OAuthDocument>('oauth',OAuthSchema)
