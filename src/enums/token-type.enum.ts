export const tokenTypes = {
    ACCESS: 'access',
    REFRESH: 'refresh',
} ;

export type TokenType = keyof typeof tokenTypes;
