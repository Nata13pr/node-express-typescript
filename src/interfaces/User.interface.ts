import {Request} from "express";
import {Schema} from "mongoose";
import { ObjectId } from "mongoose"
import { OAuthDocument} from "../dataBase/OAuth";

export interface ReqUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface TokenInfoInterface extends  OAuthDocument{
    _id?:ObjectId;
    userId:Schema.Types.ObjectId;
    access_token:string;
    refresh_token:string;
    createdAt:string;
    updatedAt:string;
    __v?:number;
}
export interface CustomRequest extends Request {
    user?:ReqUser;
    access_token?:string;
    refresh_token?:string;
   }

export interface CheckAccessTokenRequest extends Request{
    access_token?:string;

}

export interface CheckRefreshTokenRequest extends Request{
    tokenInfo?:TokenInfoInterface;

}



