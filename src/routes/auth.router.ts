import {Router} from 'express';
import{Request,Response}from 'express';
import {login} from '../controllers/auth.controller'
import {checkIsUserPresent} from '../middlewares/auth.middleware'

const userRouter:Router=Router();

userRouter.post('/login',checkIsUserPresent,(req:Request,res:Response)=>{
    login(req,res)
})

export default userRouter;
