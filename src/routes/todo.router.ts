import {Router} from "express";

import {createColumn, deleteColumn, findAllColumns, refactorColumn,createItem,deleteItem,updateItem} from '../controllers/todo.controller' ;
import {checkAccessToken} from '../middlewares/auth.middleware'
import {isUserQueryValid} from '../middlewares/token.middleware'
import {isColumnValid, isColumnUniq, isIdValid, isColumnPresent,isItemUniq,isItemValid} from '../middlewares/todo.middleware'

const todoRouter: Router = Router();

todoRouter.get('', checkAccessToken, isUserQueryValid, findAllColumns)
todoRouter.post('/column',
    checkAccessToken,
    isColumnUniq,
    isColumnValid,
    createColumn)
todoRouter.put('/column/:id',  checkAccessToken,isIdValid, isColumnUniq, isColumnValid, isColumnPresent, refactorColumn)
todoRouter.delete('/column/:id',checkAccessToken,  isIdValid, isColumnPresent, deleteColumn)
todoRouter.post('/item',checkAccessToken,isItemUniq,isItemValid,createItem)
todoRouter.delete('/item/:id',deleteItem)
todoRouter.put('/item/:id',updateItem)


export default todoRouter;

