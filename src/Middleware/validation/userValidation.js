import { Joi } from 'express-validation';
import mongoose from 'mongoose';


export const updateUserValidation = {
  params: Joi.object({
    objectId: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/) // Validate MongoDB ObjectId format
      .required()
      .messages({
        'string.pattern.base': `"objectId" must be a valid ObjectId`,
        'string.empty': `"objectId" cannot be an empty field`,
        'any.required': `"objectId" is a required field`
      }),
  }),
  body: Joi.object({
    name: Joi.string()
      .min(3)
      .messages({
        'string.base': `"name" should be a type of 'text'`,
        'string.empty': `"name" cannot be an empty field`,
        'string.min': `"name" should have a minimum length of {#limit}`
      }),
    age: Joi.number()
      .integer()
      .min(18)
      .max(100)
      .messages({
        'number.base': `"age" should be a type of 'number'`,
        'number.integer': `"age" must be an integer`,
        'number.min': `"age" must be at least {#limit} years old`,
        'number.max': `"age" cannot be more than {#limit} years old`
      }),
    email: Joi.string()
      .email()
      .messages({
        'string.email': `"email" must be a valid email`,
        'string.empty': `"email" cannot be an empty field`
      }),
    role: Joi.string()
      .valid('admin', 'user', 'guest') 
      .messages({
        'string.base': `"role" should be a type of 'text'`,
        'string.empty': `"role" cannot be an empty field`,
        'any.only': `"role" must be one of [admin, user, guest]`
      }),
  }).min(1) // Ensure at least one key is present in the body
    .messages({
      'object.min': 'At least one field (name, age, email, role) must be provided for update'
    }),
};

export const userRegisterValidation = {
  body: Joi.object({
    name: Joi.string()
      .min(3)
      .required()
      .messages({
        'string.base': `"name" should be a type of 'text'`,
        'string.empty': `"name" cannot be an empty field`,
        'string.min': `"name" should have a minimum length of {#limit}`,
        'any.required': `"name" is a required field`
      }),
    role: Joi.string()
      .valid('admin', 'user', 'guest') 
      .required()
      .messages({
        'string.base': `"role" should be a type of 'text'`,
        'string.empty': `"role" cannot be an empty field`,
        'any.required': `"role" is a required field`,
        'any.only': `"role" must be one of [admin, user, guest]`
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        'string.email': `"email" must be a valid email`,
        'string.empty': `"email" cannot be an empty field`,
        'any.required': `"email" is a required field`
      }),
    password: Joi.string()
      .pattern(new RegExp(/[a-zA-Z0-9]{3,30}/))
      .required()
      .messages({
        'string.pattern.base': `"password" must be between 3 and 30 characters and contain only letters and numbers`,
        'string.empty': `"password" cannot be an empty field`,
        'any.required': `"password" is a required field`
      }),
    age: Joi.number()
      .integer()
      .min(18)
      .max(100)
      .required()
      .messages({
        'number.base': `"age" should be a type of 'number'`,
        'number.integer': `"age" must be an integer`,
        'number.min': `"age" must be at least {#limit} years old`,
        'number.max': `"age" cannot be more than {#limit} years old`,
        'any.required': `"age" is a required field`
      }),
  }),
};



const objectIdSchema = Joi.string().custom((value, helpers) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helpers.message('Invalid ObjectId');
  }
  return value;
}, 'MongoObjectId');

export const validateObjectId = {
  params: Joi.object({
    id: objectIdSchema.required()
  })
};

