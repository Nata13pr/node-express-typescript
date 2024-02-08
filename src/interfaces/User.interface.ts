import {Request} from "express";
import {Schema} from "mongoose";
import {OAuthDocument} from "../dataBase/OAuth";

export interface ReqUser {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface TokenInfoInterface extends OAuthDocument {
    _id?: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    access_token: string;
    refresh_token: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

export interface LoginRequest extends Request {
    user?: ReqUser;
    access_token?: string;
    refresh_token?: string;
}

export interface LogoutRequest extends Request {
    access_token?: string;
    user?: TokenInfoInterface;

}

export interface RefreshRequest extends Request {
    tokenInfo?: TokenInfoInterface;

}

export interface AuthPayload {
    userId: string;
    _id: string;
}



