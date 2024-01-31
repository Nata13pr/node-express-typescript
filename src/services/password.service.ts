import bcrypt from 'bcrypt';
import CError from '../error/CustomError';

export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, 10);

export const comparePassword = async (hashPassword: string, password: string): Promise<void> => {
    const IsPasswordsSame = await bcrypt.compare(password, hashPassword);

    if (!IsPasswordsSame) {
        throw new CError('Wrong email or passwoed', 400)
    }
}
