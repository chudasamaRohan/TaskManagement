import { Joi } from 'express-validation';
import mongoose from 'mongoose';

export const assignTaskvalidate = {
    body: Joi.object({
        assigenId: Joi.string()
          .trim()
          .regex(/^[0-9a-fA-F]{24}$/) 
          .required()
          .messages({
            'string.pattern.base': `"assigneeId" must be a valid ObjectId`,
            'string.empty': `"assigneeId" cannot be an empty field`,
            'any.required': `"assigneeId" is a required field`
          }),
        taskId: Joi.string()
          .trim()
          .regex(/^[0-9a-fA-F]{24}$/) 
          .required()
          .messages({
            'string.pattern.base': `"taskId" must be a valid ObjectId`,
            'string.empty': `"taskId" cannot be an empty field`,
            'any.required': `"taskId" is a required field`
          }),
      }),
}

export const createTaskValidation = {
    body: Joi.object({
        title: Joi.string()
          .trim()
          .required()
          .messages({
            'string.base': `"title" should be a type of 'text'`,
            'string.empty': `"title" cannot be an empty field`,
            'any.required': `"title" is a required field`
          }),
        description: Joi.string()
          .trim()
          .required()
          .messages({
            'string.base': `"description" should be a type of 'text'`,
            'string.empty': `"description" cannot be an empty field`,
            'any.required': `"description" is a required field`
          }),
        dueDate: Joi.date()
          .iso()
          .required()
          .messages({
            'date.base': `"dueDate" should be a valid date`,
            'date.format': `"dueDate" should be in ISO date format (YYYY-MM-DDTHH:mm:ss.sssZ)`,
            'any.required': `"dueDate" is a required field`
          }),
      }),
}