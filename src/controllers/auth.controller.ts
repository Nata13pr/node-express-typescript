import {Request,Response,NextFunction} from 'express';
import {checkAccessTokenAvailable,genereteAuthTokens} from '../services/token.service.js';
import {hashPassword,comparePassword} from '../services/password.service';
import OAuth from '../dataBase/OAuth';
import {
    CheckRefreshTokenRequest,
    CustomRequest,
    ReqUser,
    TokenInfoInterface,
    RefreshIn,
    CheckAccessTokenRequest
} from '../interfaces/User.interface'
import CustomError from "../error/CustomError";
import OAuthModel from "../dataBase/OAuth";
import {log} from "util";

export const login =async (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{
        const user:ReqUser=req.user!;

        if(!user){
            throw new CustomError('User is not defined')
        }
         const {password:hashPassword,_id}=req.user!;
       const {password}=req.body;

        await comparePassword(hashPassword,password);

    const tokens=genereteAuthTokens();
      await OAuth.create({
            userId:_id,
            ...tokens
        });

        res.json(
            {user:req.user,
        ...tokens})

    }catch(e){
        next(e);
    }
}

export const logout=async (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{
         const {access_token,user}=req;

        const {email,name}=user as ReqUser

         await OAuth.deleteOne({access_token});

        // await emailService.sendEmail(email,emailActionTypeEnum.LOGOUT,{
        //     name,
        //     count:1
        // });
        //
         res.sendStatus(204);
    }catch(e){
        next(e)
    }
}

export const refresh=async (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{

    const{user:userId,refresh_token}=req;



 if(!userId || !refresh_token){
     throw new CustomError('Invalid token information')
 }
 await OAuthModel.deleteOne({refresh_token});

 const tokens =genereteAuthTokens();

 await OAuthModel.create({
     userId,
     ...tokens
 })
         console.log('almost finished !!!!!!!!!!!!!!!!!!!!!',userId)
         res.json(tokens)
    }catch(e){
        next(e)
    }
}
