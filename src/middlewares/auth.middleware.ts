import {Response, NextFunction} from 'express';
import CError from '../error/CustomError';
import { verifyToken} from '../services/token.service.js'
import OAuthModel, {AuthDocument} from "../dataBase/OAuth";
import {LogoutRequest,RefreshRequest, TokenInfoInterface} from '../interfaces/User.interface'
import {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} from "../constants/config";


export const checkAccessToken = async (
    req: LogoutRequest,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const access_token: string | undefined = req.get("Authorization")

        if (!access_token) {
            throw new CError('No token', 401);
        }

        verifyToken(access_token,ACCESS_TOKEN_SECRET);

        const tokenInfo: AuthDocument | null = await OAuthModel.findOne({access_token}).populate('userId');

        if (!tokenInfo) {
            throw new CError('Token not valid', 401);
        }

        req.user=tokenInfo;

        req.access_token = tokenInfo.access_token;

        next()
    } catch (e) {
        next(e)
    }
}

export const checkRefreshToken = async (req: RefreshRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const refresh_token: string | undefined = req.get('Authorization');

        if (!refresh_token) {
            throw new CError('No token', 401);
        }

        verifyToken(refresh_token,REFRESH_TOKEN_SECRET);

        const tokenInfo: TokenInfoInterface | null = await OAuthModel.findOne({refresh_token})

        if (!tokenInfo) {
            throw  new CError('Token not valid', 401)
        }

        req.tokenInfo = tokenInfo;
        next();
    } catch (e) {
        next(e)
    }
}
