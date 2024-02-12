import {Request} from "express";
import {TokenInfoInterface} from "./User.interface";
import {Schema} from 'mongoose'

interface Body {
    name: string;
}

export interface Todo {
    private: boolean;
    _id: Schema.Types.ObjectId;
    creatorId: Schema.Types.ObjectId;
    text: string;
    column: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
interface BodyItem{
    column:Schema.Types.ObjectId
    text:string;
}
export interface TodoColumn {
    todos: Todo[];
    _id: Schema.Types.ObjectId;
    creatorId: Schema.Types.ObjectId;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface CreateColumnRequest extends Request {
    body: Body;
    user?: TokenInfoInterface;
}

export interface CreateItemRequest extends Request{
    body:BodyItem;
    user?:TokenInfoInterface;
}
