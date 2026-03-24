import { userModel } from "../../DB/model/user.model.js"
import { messageModel } from "../../DB/model/msg.model.js"

export const sendMessage=async(receiverID,content,files,user)=>{

    const acc=await userModel.findOne({_id:receiverID,confirmEmail:{$exists:true}})
    
    if(!acc){
        throw new Error("user not ffound", { cause: { status: 409 } })
    }
    const message = await messageModel.create({
    receiverID,
    content,
    attachments: files?.map(file => file.finalPath || file.path) || [],
    senderID:user?user._id:undefined
  });
    return message
}
export const getMessageByID=async(messageID,user)=>{
    const msg=await messageModel.findOne({
        _id:messageID,
        $or:[
           { senderID:user._id},
            {receiverID:user._id}
        ]
        
    }
).select("-senderID");
    if(!msg){
                throw new Error("invalid msg or you are not authorized", { cause: { status: 409 } })

    }
    return msg
}
export const getMessages=async(user)=>{
    const msg=await messageModel.find({
        $or:[
           { senderID:user._id},
            {receiverID:user._id}
        ]
        
    }
).select("-senderID");

    return msg
}
export const deleteMessgaya=async(messageID,user)=>{
    const msg=await messageModel.findOneAndDelete({
        _id:messageID,
        $or:[
       
            {receiverID:user._id}
        ]
        
    }
).select("-senderID");
    if(!msg){
                throw new Error("invalid msg or you are not authorized", { cause: { status: 409 } })

    }
    return msg
}