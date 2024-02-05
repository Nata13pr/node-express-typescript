// src/dataBase/Todo.ts
import { Schema, model, Document } from 'mongoose';

// Інтерфейс для Todo
export interface Todo {
    private: boolean;
    _id:Schema.Types.ObjectId;
    creatorId: string;
    text: string;
    column: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

// Інтерфейс для TodoColumn
export interface TodoColumn {
    todos: Todo[];
    creatorId: string;
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    __v: {
        type: Number,
        default: 0,
    },
});

// Схема для TodoColumn
const todoColumnSchema = new Schema<TodoColumn>({
    todos: [todoSchema],
    creatorId: {
        type: Schema.Types.ObjectId,
         required:true,
    },
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    __v: {
        type: Number,
        default: 0,
    },
});

// Модель для Todo
const TodoModel = model<Todo & Document>('Todo', todoSchema);

// Модель для TodoColumn
const TodoColumnModel = model<TodoColumn & Document>('TodoColumn', todoColumnSchema);

export default { TodoModel, TodoColumnModel };
