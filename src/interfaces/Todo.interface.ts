import {Request} from "express";
import {TokenInfoInterface} from "./User.interface";
import {Schema} from 'mongoose'

interface Body{
    name:string;
}

export interface Todo {
    private: boolean;
    _id: Schema.Types.ObjectId;
    creatorId: string;
    text: string;
    column: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface TodoColumn {
    todos: Todo[];
    _id: string;
    creatorId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface CreateColumnRequest extends Request {
    body: Body;
    user?:TokenInfoInterface;

}
