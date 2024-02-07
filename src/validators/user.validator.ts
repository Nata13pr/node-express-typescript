import Joi, {ObjectSchema} from 'joi';
import {emailValidator, nameValidator, passwordValidator} from './share';
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

const updateUserValidator: ObjectSchema<UpdateUserValidator> = Joi.object(userSubScheme);

const testValid: ObjectSchema<TestValid> = Joi.object({
    isAdult: Joi.boolean(),
    array: Joi.array()
        .items(testArraySubSchema)
        .when('isAdult', {is: true, then: Joi.required()}),
});

export {newUserValidator, updateUserValidator, testValid,RegisteredUserValidator};
