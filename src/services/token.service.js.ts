import jwt from 'jsonwebtoken';
import CError from '../error/CustomError';
import {ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET} from '../constants/config';
import {AuthPayload} from '../interfaces/User.interface'

export function generateAuthTokens(payload: AuthPayload = {
    userId: '',
    _id: ''
}): { access_token: string, refresh_token: string } {
    const access_token = jwt.sign(payload, ACCESS_TOKEN_SECRET, {expiresIn: '15m'});
    const refresh_token = jwt.sign(payload, REFRESH_TOKEN_SECRET, {expiresIn: '30d'});

    return {
        access_token,
        refresh_token
    }
}

export function verifyToken(token: string = '', type: string = ''): AuthPayload {
    try {
        return jwt.verify(token, type) as AuthPayload;
    } catch (e) {
        throw new CError('Token not valid', 401)
    }
}

