import {Router} from "express";

import {createUser} from '../controllers/user.controller' ;


const userRouter: Router = Router();

userRouter.post(
    '/',
    // isNewUserValid,
    //  isEmailRegistered,
    createUser
);


module.exports = userRouter;
