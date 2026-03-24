import { confirmEmailSchema, loginSchema, signupSchema } from "../modules/auth/auth.validation.js"
import { getmessaggeew2, sendMessageValids } from "../modules/message/message.validation.js";
import {  forgetPasswordValids, profileCoverImage, profileImage112, updatePasswordValids, validsss } from "../modules/user/user.validation.js";

export const valid=(req,res,next)=>{
        const validation=signupSchema.validate(req.body,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   next()
}
export const validationElConfirm=(req,res,next)=>{
        const validation=confirmEmailSchema.validate(req.body,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   next()
}
export const valil=(req,res,next)=>{
        const validation=loginSchema.validate(req.body,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   next()
}
export const validss=(req,res,next)=>{
        const validation=validsss.validate(req.params.userID,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   next()
}
export const imageValiddssdfs=(req,res,next)=>{
       const validation=profileImage112.file.validate(req.file,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   console.log("done validationm elsora");
   next()
}
export const imageBeValid=(req,res,next)=>{
       const validation=profileCoverImage.files.validate(req.files,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   console.log("done validationm elsora");
   next()
}
export const updatePasswordValidation=(req,res,next)=>{
          const validation=updatePasswordValids.validate(req.body,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   console.log("done validationm elupdate");
   next()
}
export const forgetPasswordValidation=(req,res,next)=>{
          const validation=forgetPasswordValids.validate(req.body,{abortEarly:false})
        if(validation.error){
            throw new 
Error("validation error", { cause: { status: 409 } })     
   }
   console.log("done validationm elupdate");
   next()
}
export const sendMessageeeeee = (req, res, next) => {
  let validation = sendMessageValids.params.validate(req.params, { abortEarly: false });

  if (validation.error) {
    const error = new Error(validation.error.details.map((d) => d.message).join(", "));
    error.status = 400;
    throw error;
  }

  validation = sendMessageValids.body.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = new Error(validation.error.details.map((d) => d.message).join(", "));
    error.status = 400;
    throw error;
  }

  validation = sendMessageValids.files.validate(req.files, { abortEarly: false });

  if (validation.error) {
    const error = new Error(validation.error.details.map((d) => d.message).join(", "));
    error.status = 400;
    throw error;
  }
  const hasContent = req.body?.content?.trim();
  const hasFiles = req.files && req.files.length > 0;

  if (!hasContent && !hasFiles) {
    const error = new Error("message must contain content or attachments");
    error.status = 400;
    throw error;
  }
  next();
};
export const getmessaggee = (req, res, next) => {
  let validation = getmessaggeew2.params.validate(req.params, { abortEarly: false });

  if (validation.error) {
    const error = new Error(validation.error.details.map((d) => d.message).join(", "));
    error.status = 400;
    throw error;
  }

  
  next();
};