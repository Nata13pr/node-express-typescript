// src/dataBase/Todo.ts
import { Schema, model, Document } from 'mongoose';

// Інтерфейс для Todo
export interface Todo extends Document{
    private: boolean;

    creatorId:Schema.Types.ObjectId;
    text: string;
    column: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

// Інтерфейс для TodoColumn
export interface TodoColumn  extends Document{

    todos: Todo[];
    creatorId: Schema.Types.ObjectId;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

// Схема для Todo
const todoSchema = new Schema<Todo>({
    private: {
        type: Boolean,
        required: true,
    },
    creatorId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    column: {
        type: String,
        required: true,
    },
    someReference:{
        type:Schema.Types.ObjectId,
        ref:'SomeModel',
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // __v: {
    //     type: Number,
    //     default: 0,
    // },
});

// Схема для TodoColumn
const todoColumnSchema = new Schema<TodoColumn>({
    // _id:Schema.Types.ObjectId,
    todos: [todoSchema],
    creatorId: {
        type: Schema.Types.ObjectId,
         required:true,
    },
    name: {
        type: String,
        required: true,
    },
    someReference:{
        type:Schema.Types.ObjectId,
        ref:'SomeModel',
    }
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // __v: {
    //     type: Number,
    //     default: 0,
    // },
},{timestamps:true});

// Модель для Todo
const TodoModel = model('Todo', todoSchema);

// Модель для TodoColumn
const TodoColumnModel = model('TodoColumn', todoColumnSchema);

export type TodoDocument=TodoColumn & Document;
export default { TodoModel, TodoColumnModel };
