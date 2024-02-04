import {Schema, model} from 'mongoose'


const todoSchema = new Schema<Todo>(
    {
        private: {
            type: Boolean,
            required: true
        },
        creatorId: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        column: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        __v: {
            type: Number,
            default: 0
        },
    });

const todoColumnSchema = new Schema<TodoColumn>({
    todos: [todoSchema],
    creatorId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    __v: {
        type: Number,
        default: 0
    },
});

// Модель для todo
const TodoModel = model<Todo>('Todo', todoSchema);

// Модель для колонки (з завданнями)
const TodoColumnModel = model<TodoColumn>('TodoColumn', todoColumnSchema);

export {TodoModel, TodoColumnModel};
