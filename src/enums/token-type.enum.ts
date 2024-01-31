export const tokenTypes = {
    ACCESS: 'access',
    REFRESH: 'refresh',
} as const;

export type TokenType = keyof typeof tokenTypes;
