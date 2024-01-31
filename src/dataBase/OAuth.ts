import {Schema, model, Document} from 'mongoose';

export interface OAuthDocument extends Document {
    userId: Schema.Types.ObjectId;
    access_token: string;
    refresh_token: string;
    createdAt: string;
    updatedAt: string;
}

const OAuthSchema = new Schema<OAuthDocument>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user',
            required: true,
        },
        access_token: {
            type: String,
            required: true,
        },
        refresh_token: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

const OAuthModel = model<OAuthDocument>('oauth', OAuthSchema);

export default OAuthModel;
export type AuthDocument = OAuthDocument & Document;
