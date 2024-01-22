import {Router} from "express";

import {Router} from 'express';

import  userController from'../controllers/user.controller' ;
import authMdlwr from  '../middlewares/auth.middleware' ;
import  userMdlwr from '../middlewares/user.middleware';

const userRouter:Router=Router();

userRouter.post(
    '/',
    userMdlwr.isNewUserValid,
    userMdlwr.isEmailRegistered,
    userController.createUser
);


module.exports = userRouter;
