import {Schema, model, Document} from 'mongoose';

export interface Todo extends Document {
    private: boolean;

    creatorId: Schema.Types.ObjectId;
    text: string;
    column: Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

export interface TodoColumn extends Document {

    todos: Todo[];
    creatorId: Schema.Types.ObjectId;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
}

const todoSchema = new Schema<Todo>({
    private: {
        type: Boolean,
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
        type:Schema.Types.ObjectId,
        ref:"TodoColumn",
        required: true
    },

    someReference: {
        type: Schema.Types.ObjectId,
        ref: 'SomeModel',
    }
},{timestamps: true});

const todoColumnSchema = new Schema<TodoColumn>({
    todos: [{
        type:Schema.Types.ObjectId,
        ref:'Todo'
    }],
    creatorId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    someReference: {
        type: Schema.Types.ObjectId,
        ref: 'SomeModel',
    }
}, {timestamps: true});

const TodoItemModel = model('Todo', todoSchema);

const TodoColumnModel = model('TodoColumn', todoColumnSchema);

export type TodoDocument = TodoColumn & Document;
export type TodoItemDocument=Todo & Document
export default {TodoItemModel, TodoColumnModel};
