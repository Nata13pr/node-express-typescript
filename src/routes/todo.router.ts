import {Router} from "express";

import {createColumn,deleteColumn,findAllColumns,refactorColumn} from '../controllers/todo.controller' ;
import {checkAccessToken} from '../middlewares/auth.middleware'
import {isUserQueryValid} from '../middlewares/token.middleware'

const todoRouter: Router = Router();

todoRouter.get('',isUserQueryValid,findAllColumns)
todoRouter.post('/column',checkAccessToken,createColumn)
todoRouter.put('./column/:id',refactorColumn)
todoRouter.delete('/column/:id',checkAccessToken,deleteColumn)


export default todoRouter;

