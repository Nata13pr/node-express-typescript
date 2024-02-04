interface Todo {
    private: boolean;
    _id: string;
    creatorId: string;
    text: string;
    column: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

interface TodoColumn {
    todos: Todo[];
    _id: string;
    creatorId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
