import jwt from 'jsonwebtoken';
import CError from '../error/CustomError';
import {ACCESS_TOKEN_SECRET,REFRESH_TOKEN_SECRET}from '../constants/config';

interface AuthPayload{
    userId:string;
    _id:string;
}

export function genereteAuthTokens(payload:AuthPayload={userId:'',_id:''}):{access_token:string,refresh_token:string}{
    const access_token=jwt.sign(payload,ACCESS_TOKEN_SECRET,{expiresIn:'15m'});
    const refresh_token=jwt.sign(payload,REFRESH_TOKEN_SECRET,{expiresIn:'30d'});

    return {
        access_token,
        refresh_token
    }
}

export function checkAccessTokenAvailable(token:string=''):AuthPayload{
    try{
        return jwt.verify(token,ACCESS_TOKEN_SECRET)as AuthPayload;
    }catch(e){
        throw new CError('Token not valid',401)
    }
}

export  function checkRefreshTokenAvailable(token:string=''):AuthPayload{
try{
    return jwt.verify(token,REFRESH_TOKEN_SECRET) as AuthPayload;
    }catch(e){
    throw new CError('Token not valid',401)
}
}
