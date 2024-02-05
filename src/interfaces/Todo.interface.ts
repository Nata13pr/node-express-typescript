import {Request} from "express";
import {TokenInfoInterface} from "./User.interface";

interface Body{
    name:string;
}

interface Todo {
    private: boolean;
    _id: string;
    creatorId: string;
    text: string;
    column: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface TodoColumn {
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
