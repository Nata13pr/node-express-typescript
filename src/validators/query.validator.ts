import Joi from 'joi';
import { emailValidator, nameValidator } from './share';

export const findAll = Joi.object({
    name: nameValidator,
    email: emailValidator,
});
