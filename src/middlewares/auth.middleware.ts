import {Response, NextFunction} from 'express';
import CError from '../error/CustomError';
import {verifyAccessToken, verifyRefreshToken} from '../services/token.service.js'
import OAuthModel, {AuthDocument} from "../dataBase/OAuth";
import {CheckAccessTokenRequest, CheckRefreshTokenRequest, TokenInfoInterface} from '../interfaces/User.interface'


export const checkAccessToken = async (
    req: CheckAccessTokenRequest,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {

        const access_token: string | undefined = req.get("Authorization")

        if (!access_token) {
            throw new CError('No token', 201);
        }

        verifyAccessToken(access_token);

        const tokenInfo: AuthDocument | null = await OAuthModel.findOne({access_token}).populate('userId');

        if (!tokenInfo) {
            throw new CError('Token not valid', 401);
        }

        req.access_token = tokenInfo.access_token;

        next()
    } catch (e) {
        next(e)
    }
}

export const checkRefreshToken = async (req: CheckRefreshTokenRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const refresh_token: string | undefined = req.get('Authorization');

        if (!refresh_token) {
            throw new CError('No token', 401);
        }

        verifyRefreshToken(refresh_token);

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
