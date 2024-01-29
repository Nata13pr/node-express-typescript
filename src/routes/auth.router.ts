import {Router} from 'express';
import {login,logout,refresh} from '../controllers/auth.controller'
import {createUser} from "../controllers/user.controller";
import {isNewUserValid,isEmailRegistered,checkIsUserPresent} from '../middlewares/user.middleware';
import {checkAccessToken,checkRefreshToken} from '../middlewares/auth.middleware'

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

authRouter.post('/logout',checkAccessToken,
    logout)

 authRouter.post('/refresh',checkRefreshToken,refresh)
export default authRouter;
