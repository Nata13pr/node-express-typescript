import {Router} from "express";

import {createColumn} from '../controllers/todo.controller' ;
import authRouter from "./auth.router";


const todoRouter: Router = Router();

todoRouter.post('/',createColumn)



export default authRouter;

