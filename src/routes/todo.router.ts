import {Router} from "express";

import {createColumn, deleteColumn, findAllColumns, refactorColumn} from '../controllers/todo.controller' ;
import {checkAccessToken} from '../middlewares/auth.middleware'
import {isUserQueryValid} from '../middlewares/token.middleware'
import {isColumnValid, isColumnUniq, isIdValid, isColumnPresent} from '../middlewares/todo.middleware'

const todoRouter: Router = Router();

todoRouter.get('', checkAccessToken, isUserQueryValid, findAllColumns)
todoRouter.post('/column',
    checkAccessToken,
    isColumnUniq,
    isColumnValid,
    createColumn)
todoRouter.put('/column/:id', isIdValid, checkAccessToken, isColumnUniq, isColumnValid, isColumnPresent, refactorColumn)
todoRouter.delete('/column/:id', isIdValid, checkAccessToken, isColumnPresent, deleteColumn)


export default todoRouter;

