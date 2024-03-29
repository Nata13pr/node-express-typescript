import Joi, {ObjectSchema} from 'joi';
import {emailValidator, nameValidator, passwordValidator} from './share';
import {NewUserValidator, RegisteredUserValidator, UpdateUserValidator} from '../interfaces/Validator.interface'

export const userSubScheme = {
    name: Joi.string().alphanum().min(2).max(100).required(),
};

const newUserValidator: ObjectSchema<NewUserValidator> = Joi.object({
    ...userSubScheme,
    email: emailValidator.required(),
    password: passwordValidator.required(),
});


const RegisteredUserValidator: ObjectSchema<RegisteredUserValidator> = Joi.object({
    ...userSubScheme,
    email: emailValidator,
    name: nameValidator,
    password: passwordValidator,
})
    .with('email', 'password')
    .with('name', 'password');

export {newUserValidator, RegisteredUserValidator};
