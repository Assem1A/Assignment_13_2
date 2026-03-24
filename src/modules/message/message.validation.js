import joi from 'joi'
import { fileFieldValidation } from '../../common/utils/multer.js';
import { Types } from 'mongoose';
export const sendMessageValids = {
  params: joi.object({
    receiverID: joi.string().required().custom((value, helpers) => {
      if (!Types.ObjectId.isValid(value)) {
        return helpers.message("invalid object id");
      }
      return value;
    })
  }),

  body: joi.object({
    content: joi.string().min(2).max(10000)
    
  }),
files: joi.array().items(
  joi.object({
    fieldname: joi.string().required(),
    originalname: joi.string().required(),
    encoding: joi.string().required(),
    mimetype: joi.string().valid(...Object.values(fileFieldValidation.Image)).required(),
    destination: joi.string().required(),
    filename: joi.string().required(),
    path: joi.string().required(),
    size: joi.number().required()
  }).unknown(true)
).max(2)
};

export const getmessaggeew2 = {
  params: joi.object({
    messageID: joi.string().required().custom((value, helpers) => {
      if (!Types.ObjectId.isValid(value)) {
        return helpers.message("invalid object id");
      }
      return value;
    })
  }),

  
};