export interface NewUserValidator {
    name: string;
    age?: number;
    email: string;
    password: string;
}

export interface RegisteredUserValidator{
    name?: string;
    age?: number;
    email?: string;
    password: string;
}

export interface UpdateUserValidator {
    name: string;
    age?: number;
}

export interface TestValid {
    isAdult?: boolean;
    array?: Array<{ car?: boolean }>;
}
