export const PASSWORD_REGEX: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-]).{8,}$/;
export const EMAIL_REGEX: RegExp = /^([^,@]+)(\.[^.@]+)*@([^.@]+\.)+([^.@]+)$/;

export const  MONGOURI: string = 'mongodb://127.0.0.1:27017/camp';
export const PORT:number=7000;
