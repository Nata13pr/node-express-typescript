import {Router} from 'express';
import{Request,Response}from 'express';
import {login} from '../controllers/auth.controller'
import {checkIsUserPresent} from '../middlewares/user.middleware'

const userRouter:Router=Router();

userRouter.post('/login',
    // checkIsUserPresent,
    login)

export default userRouter;
