import mongoose from "mongoose";

const msgSchema=new mongoose.Schema({
content:{
    type:String,
    minLength:2,
    maxLength:10000,
    required:function(){
        return !this.attachments?.length
    }
},
attachments:{
    type:[String],

},
receiverID:{
    type:mongoose.Schema.Types.ObjectId,ref:"Users",required:true
},
senderID:{
    type:mongoose.Schema.Types.ObjectId,ref:"Users"
}
},{
       collection: "Messages",
        timestamps: true,
        strict: true,
        strictQuery: false
})
export const messageModel=mongoose.models.Messages||mongoose.model("Messages",msgSchema)