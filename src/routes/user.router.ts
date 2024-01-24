import {Router} from "express";

import {Router} from 'express';

import {createUser} from'../controllers/user.controller' ;
// import authMdlwr from  '../middlewares/auth.middleware' ;
import {isEmailRegistered,isNewUserValid} from '../middlewares/user.middleware';

const userRouter:Router=Router();

userRouter.post(
    '/',
   // isNewUserValid,
   //  isEmailRegistered,
    createUser
);


module.exports = userRouter;
