import {Schema, model, Document} from 'mongoose';

export interface Todo extends Document {
    private: boolean;

    creatorId: Schema.Types.ObjectId;
    text: string;
    column: string;
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
    someReference: {
        type: Schema.Types.ObjectId,
        ref: 'SomeModel',
    }
});

const todoColumnSchema = new Schema<TodoColumn>({
    todos: [todoSchema],
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

const TodoModel = model('Todo', todoSchema);

const TodoColumnModel = model('TodoColumn', todoColumnSchema);

export type TodoDocument = TodoColumn & Document;
export default {TodoModel, TodoColumnModel};
