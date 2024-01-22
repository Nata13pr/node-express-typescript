import Joi, { StringSchema } from 'joi';
import { EMAIL_REGEX } from '../constants/constant';

const emailValidator: StringSchema = Joi.string().regex(EMAIL_REGEX).lowercase();

export { emailValidator };
