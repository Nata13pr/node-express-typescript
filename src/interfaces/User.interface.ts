import {Request} from "express";

export interface ReqUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface CustomRequest extends Request {
    user?:ReqUser
}
