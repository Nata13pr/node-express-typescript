import {Router} from 'express';
import{Request,Response}from 'express';
import {login} from '../controllers/auth.controller'
import {checkIsUserPresent} from '../middlewares/user.middleware'
import {createUser} from "../controllers/user.controller";

const authRouter:Router=Router();

authRouter.post('/login',
    // checkIsUserPresent,
    login)
authRouter.post(
    '/register',
    // isNewUserValid,
    //  isEmailRegistered,
    createUser
);

export default authRouter;
