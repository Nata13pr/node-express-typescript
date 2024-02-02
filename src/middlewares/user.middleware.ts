import {Request, Response, NextFunction, RequestHandler} from 'express';
import CustomError from '../error/CustomError';
import {newUserValidator,RegisteredUserValidator} from '../validators/user.validator';
import User from '../dataBase/User';
import {CheckIsUserPresentRequest, ReqUser} from '../interfaces/User.interface'


export const isNewUserValid = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {error, value} = newUserValidator.validate(req.body);

        if (error) {
            throw new CustomError(error.details[0].message);
        }

        req.body = value;
        next();
    } catch (e) {
        next(e);
    }
};

export  const IsUserValid=(req:Request,res:Response,next:NextFunction)=>{
    try{
        const{error,value}=RegisteredUserValidator.validate(req.body);

        if(error){
            throw new CustomError((error.details[0].message))
        }
        req.body = value;
        next();
    }catch(e){
        next(e)
    }
}

export const isEmailRegistered = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body;
        const userByEmail = await User.findOne({email});

        if (userByEmail) {
            throw new CustomError(`User with such email is already registered`, 409);
        }

        next();
    } catch (e) {
        next(e);
    }
};

export const checkIsUserPresent: RequestHandler = async (req: CheckIsUserPresentRequest, res: Response, next: NextFunction) => {
    try {
        const { email, name } = req.body;

        if (!email && !name) {
            throw new CustomError(`Email or name is required`, 400);
        }

        let user;

        if (email) {
            user = await User.findOne({ email });
        } else {
            user = await User.findOne({ name });
        }

        if (!user) {
            throw new CustomError(`User not found`, 404);
        }

        req.user = user;
        next();
    } catch (e) {
        next(e);
    }
};
