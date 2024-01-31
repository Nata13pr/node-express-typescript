import Joi, {ObjectSchema} from 'joi';
import {emailValidator} from './share';
import {PASSWORD_REGEX} from '../constants/constant';

const userSubScheme = {
    name: Joi.string().alphanum().min(2).max(100).required(),
    age: Joi.number().integer().min(1).max(130),
};

const testArraySubSchema = Joi.object({
    car: Joi.boolean(),
});

interface NewUserValidator {
    name: string;
    age?: number;
    email: string;
    password: string;
}

interface UpdateUserValidator {
    name: string;
    age?: number;
}

interface TestValid {
    isAdult?: boolean;
    array?: Array<{ car?: boolean }>;
}

const newUserValidator: ObjectSchema<NewUserValidator> = Joi.object({
    ...userSubScheme,
    email: emailValidator.required(),
    password: Joi.string().regex(PASSWORD_REGEX).required(),
});

const updateUderValidator: ObjectSchema<UpdateUserValidator> = Joi.object(userSubScheme);

const testValid: ObjectSchema<TestValid> = Joi.object({
    isAdult: Joi.boolean(),
    array: Joi.array()
        .items(testArraySubSchema)
        .when('isAdult', {is: true, then: Joi.required()}),
});

export {newUserValidator, updateUderValidator, testValid};
