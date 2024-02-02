import Joi, {ObjectSchema} from 'joi';
import {emailValidator} from './share';
import {PASSWORD_REGEX} from '../constants/constant';
import {NewUserValidator,RegisteredUserValidator,UpdateUserValidator,TestValid} from '../interfaces/Validator.interface'

export const userSubScheme = {
    name: Joi.string().alphanum().min(2).max(100).required(),
};
const testArraySubSchema = Joi.object({
    car: Joi.boolean(),
});



const newUserValidator: ObjectSchema<NewUserValidator> = Joi.object({
    ...userSubScheme,
    email: emailValidator.required(),
    password: Joi.string().regex(PASSWORD_REGEX).required(),
});


const RegisteredUserValidator: ObjectSchema<RegisteredUserValidator> = Joi.object({
    ...userSubScheme,
    email: emailValidator,
    name: Joi.string().alphanum().min(2).max(100),
     password: Joi.string().regex(PASSWORD_REGEX).required(),
})
    .with('email', 'password')
    .with('name', 'password');

const updateUserValidator: ObjectSchema<UpdateUserValidator> = Joi.object(userSubScheme);

const testValid: ObjectSchema<TestValid> = Joi.object({
    isAdult: Joi.boolean(),
    array: Joi.array()
        .items(testArraySubSchema)
        .when('isAdult', {is: true, then: Joi.required()}),
});

export {newUserValidator, updateUserValidator, testValid,RegisteredUserValidator};
