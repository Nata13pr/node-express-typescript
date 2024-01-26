import {Request,Response,NextFunction} from 'express';
import {checkAccessTokenAvailable,genereteAuthTokens,checkRefreshToken} from '../services/token.service.js';
import {hashPassword,comparePassword} from '../services/password.service';
import OAuth from '../dataBase/OAuth';
import {CustomRequest,ReqUser,TokenInfoInterface} from '../interfaces/User.interface'
import CustomError from "../error/CustomError";

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
        console.log('controller222222222222222222222222')
        // // const{_id}=req;
        //  const {refresh_token}=req;
        // //
        // // const {email,name}=user as ReqUser
        //
        // await OAuth.findByIdAndUpdate({access_token});
        //
        // res.sendStatus(204);
    }catch(e){
        next(e)
    }
}
