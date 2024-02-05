import {Router} from "express";

import {createColumn,deleteColumn} from '../controllers/todo.controller' ;
import {checkAccessToken} from '../middlewares/auth.middleware'

const todoRouter: Router = Router();

todoRouter.post('/column',checkAccessToken,createColumn)
todoRouter.delete('/column/:id',checkAccessToken,deleteColumn)

export default todoRouter;

