export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'qqqqqq';
export const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || 'ppppppppppp';

export const MONGO_URL: string = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/camp';
export const PORT: number = Number(process.env.PORT) || 7000;
//PORT  не можу протипізувати,коли витягаю з nv файла
