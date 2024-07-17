import { Joi } from 'express-validation';

export const loginUserValidation = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': `"email" must be a valid email`,
        'string.empty': `"email" cannot be an empty field`,
        'any.required': `"email" is a required field`
      }),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': `"password" cannot be an empty field`,
        'any.required': `"password" is a required field`
      }),
  }),
};
