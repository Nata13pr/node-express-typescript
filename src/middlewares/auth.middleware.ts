import {Request,Response,NextFunction} from 'express';
import CError from '../error/CustomError';
import {checkAccessTokenAvailable} from '../services/token.service.js'
import OAuthModel,{OAuthDocument} from "../dataBase/OAuth";

export const checkAccessToken=async(
    req:Request,
    res:Response,
    next:NextFunction
):Promise<void>=>{
    try{
        const access_token:string | undefined=req.get("Authorization")

        if(!access_token){
            throw new CError('No token',201);
        }

        checkAccessTokenAvailable(access_token);

        const tokenInfo:OAuthDocument |null =await OAuthModel.findOne({access_token}).populate('userId');

        if(!tokenInfo){
            throw new CError('Token not valid',401);
        }

        req.user=tokenInfo.useId;
        next()
    }catch(e){
        next(e)
    }
}
