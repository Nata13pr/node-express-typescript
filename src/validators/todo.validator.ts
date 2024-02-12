import Joi,{ObjectSchema} from 'joi';

export const todoSchema = Joi.object({
    private: Joi.boolean(),
    _id: Joi.string().hex().length(24),
    creatorId: Joi.string().alphanum().min(1),
    text: Joi.string().required(),
    column: Joi.string().alphanum().min(1).required(),
    createdAt: Joi.date().iso(),
    updatedAt: Joi.date().iso(),
    __v: Joi.number().integer()
});


export const ColumnValidator = Joi.object({
    name: Joi.string().regex(/^[^\s]+(?: \S+)*$/).min(1).max(100).required(),
    todos: Joi.array().items(todoSchema)
})
export const TodosValidator: ObjectSchema<any> = todoSchema;
