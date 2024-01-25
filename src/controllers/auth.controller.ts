import {Request,Response,NextFunction} from 'express';
import {checkAccessTokenAvailable,genereteAuthTokens} from '../services/token.service.js';
import {hashPassword,comparePassword} from '../services/password.service';
import OAuth from '../dataBase/OAuth';
import {CustomRequest,ReqUser} from '../interfaces/User.interface'

interface User{
    _id:string;
    password:string;
}

export const login =async (req:CustomRequest,res:Response,next:NextFunction)=>{
    try{
        console.log('req.user')
         const {password:hashPassword,_id}:User=req.user;
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
