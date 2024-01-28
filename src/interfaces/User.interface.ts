import {Request} from "express";
import {Schema} from "mongoose";
import { ObjectId } from "mongoose"
import {AuthDocument} from "../dataBase/OAuth";

export interface ReqUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface YourInterface {
    _id: ObjectId;
    userId: Schema.Types.ObjectId;
    access_token: string;
    refresh_token: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
export interface TokenInfoInterface {
    _id:string;
    userId:Schema.Types.ObjectId;
    access_token:string;
    refresh_token:string;
    createdAt:string;
    updatedAt:string;
    __v:number;
}
export interface CustomRequest extends Request {
    user?:ReqUser;
    access_token?:string;
    refresh_token?:string;
   }

export interface CheckAccessTokenRequest extends Request{
    user?:Schema.Types.ObjectId;
    access_token?:string;
    refresh_token?:string;
}

export interface CheckRefreshTokenRequest extends Request{
    user?:AuthDocument

}

export interface RefreshIn extends Request{
user?:YourInterface
}
