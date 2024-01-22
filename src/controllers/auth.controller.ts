import {Request,Response,NextFunction} from 'express';
import {genereteAuthTokens} from '../services/token.service';
import passwordService from '../services/password.service';
import OAuth from '../dataBase/OAuth';

interface User{
    _id:string;
}

export const login =async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {password:hashPassword,_id}:User=req.user;
        const {password}=req.body;

        await passwordService.comparePassword(hashPassword,password);

        const tokens=genereteAuthTokens();
        await OAuth.create({
            userId:_id,
            ...tokens
        });
        res.json({user:req.user,
        ...tokens})
    }catch(e){
        next(e);
    }
}
