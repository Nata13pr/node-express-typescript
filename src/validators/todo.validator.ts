import Joi from 'joi';

export const todoSchema = Joi.object({
    private: Joi.boolean().required(),
    _id: Joi.string().hex().length(24).required(), // assuming _id is a string
    creatorId: Joi.string().alphanum().min(1).required(),
    text: Joi.string().required(),
    column: Joi.string().alphanum().min(1).required(),
    createdAt: Joi.date().iso().required(),
    updatedAt: Joi.date().iso().required(),
    __v: Joi.number().integer().required()
});


export const ColumnValidator = Joi.object({
    name: Joi.string().regex(/^[^\s]+(?: \S+)*$/).min(1).max(100).required(),
    todos: Joi.array().items(todoSchema)
})
