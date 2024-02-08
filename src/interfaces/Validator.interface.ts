export interface NewUserValidator {
    name: string;
    email: string;
    password: string;
}

export interface RegisteredUserValidator {
    name?: string;
    email?: string;
    password: string;
}

export interface UpdateUserValidator {
    name: string;
}

