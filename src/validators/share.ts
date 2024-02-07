import Joi, {StringSchema} from 'joi';
import {EMAIL_REGEX,PASSWORD_REGEX} from '../constants/constant';

 const emailValidator: StringSchema = Joi.string().regex(EMAIL_REGEX).lowercase();
 const nameValidator:StringSchema= Joi.string().alphanum().min(2).max(100);
 const passwordValidator:StringSchema = Joi.string().regex(PASSWORD_REGEX).required().trim();

 export  {emailValidator,nameValidator,passwordValidator};

