import {Request,Response,NextFunction} from 'express';
import CError from '../error/CustomError';
import {checkAccessTokenAvailable,checkRefreshTokenAvailable} from '../services/token.service.js'
import OAuthModel,{ AuthDocument} from "../dataBase/OAuth";
import {CustomRequest,ReqUser,TokenInfoInterface,CheckAccessTokenRequest,CheckRefreshTokenRequest} from '../interfaces/User.interface'
import {Schema} from "mongoose";
import {tokenTypes} from '../enums/token-type.enum'
import CustomError from "../error/CustomError";

export const checkAccessToken=async(
    req:CheckAccessTokenRequest,
    res:Response,
    next:NextFunction
):Promise<void>=>{
    try{

         const access_token:string | undefined=req.get("Authorization")

         if(!access_token){
             throw new CError('No token',201);
         }

        checkAccessTokenAvailable(access_token);

         const tokenInfo:AuthDocument | null =await OAuthModel.findOne({access_token}).populate('userId');

         if(!tokenInfo){
            throw new CError('Token not valid',401);
         }

         req.access_token=tokenInfo.access_token;
          req.user = tokenInfo.userId;

        next()
    }catch(e){
        next(e)
    }
}

export const checkRefreshToken =async (req:CheckAccessTokenRequest,res:Response,next:NextFunction):Promise<void>=>{
    try{
        const refresh_token:string | undefined =req.get('Authorization');

        if(!refresh_token){
            throw new CError('No token',401);
        }

        checkRefreshTokenAvailable(refresh_token);

        const tokenInfo:AuthDocument | null=await  OAuthModel.findOne({refresh_token})

        if(!tokenInfo){
            throw  new CError('Token not valid',401)
        }

        req.refresh_token=tokenInfo.refresh_token;
        req.user = tokenInfo.userId;
        next();
    }catch (e) {
        next(e)
    }
}
