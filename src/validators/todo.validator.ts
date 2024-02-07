import Joi, {StringSchema} from 'joi';

export const nameColumnValidator:StringSchema= Joi.string().alphanum().min(1).max(100);
