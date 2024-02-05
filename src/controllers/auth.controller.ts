import {Response, NextFunction} from 'express';
import {generateAuthTokens} from '../services/token.service.js';
import {comparePassword} from '../services/password.service';
import OAuth from '../dataBase/OAuth';
import {
    LoginRequest,
    LogoutRequest,
    RefreshRequest, ReqUser
} from '../interfaces/User.interface'
import CustomError from "../error/CustomError";
import OAuthModel from "../dataBase/OAuth";

export const login = async (req: LoginRequest, res: Response, next: NextFunction) => {
    try {
        const user: ReqUser = req.user!;

        if (!user) {
            throw new CustomError('User is not defined')
        }
        const {password: hashPassword, _id} = req.user!;
        const {password} = req.body;

        await comparePassword(hashPassword, password);

        const tokens = generateAuthTokens();
        await OAuth.create({
            userId: _id,
            ...tokens
        });

        res.json(
            {
                user: req.user,
                ...tokens
            })

    } catch (e) {
        next(e);
    }
}

export const logout = async (req: LogoutRequest, res: Response, next: NextFunction) => {
    try {
        const {access_token} = req;

        await OAuth.deleteOne({access_token});

        res.sendStatus(204);
    } catch (e) {
        next(e)
    }
}

export const refresh = async (req: RefreshRequest, res: Response, next: NextFunction) => {
    try {

        const {userId, refresh_token} = req.tokenInfo || {};


        if (!userId || !refresh_token) {
            throw new CustomError('Invalid token information')
        }
        await OAuthModel.deleteOne({refresh_token});

        const tokens = generateAuthTokens();

        await OAuthModel.create({
            userId,
            ...tokens
        })
        res.json(tokens)
    } catch (e) {
        next(e)
    }
}
