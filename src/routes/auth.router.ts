import {Router} from 'express';
import{Request,Response}from 'express';
import {login} from '../controllers/auth.controller'
import {createUser} from "../controllers/user.controller";
import {isNewUserValid,isEmailRegistered,checkIsUserPresent} from '../middlewares/user.middleware'

const authRouter:Router=Router();

authRouter.post(
    '/register',
    isNewUserValid,
    isEmailRegistered,
    createUser
);
authRouter.post('/login',
    checkIsUserPresent,
    login)

authRouter.post('/logout',
    logout)
export default authRouter;
