import {Router} from "express";

import {createColumn} from '../controllers/todo.controller' ;
import {checkAccessToken} from '../middlewares/auth.middleware'

const todoRouter: Router = Router();

todoRouter.post('/column',checkAccessToken,createColumn)

export default todoRouter;

