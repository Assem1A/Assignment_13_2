import { Router } from "express";
import { deleteMessgaya, getMessageByID, getMessages, sendMessage } from "./message.service.js";
import { fileFieldValidation, localFileUpload } from "../../common/utils/multer.js";
import { getmessaggee, sendMessageeeeee } from "../../middleware/validation.middleware.js";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../../../config/config.service.js";
import { userModel } from "../../DB/model/user.model.js";
import { auth, authorization } from "../../middleware/auth.middleware.js";
const router = new Router()
router.post(
    '/:receiverID',

    async (req, res, next) => {
        if (req.headers.authorization) {

            const authorization = req.headers.authorization

            let decoded

            try {


                decoded = jwt.verify(authorization, JWT_SECRET);
                console.log(decoded);



            } catch (err) {
                return res.status(403).json({ message: "Invalid  token type" });
            }
            const user = await userModel.findById(decoded.id)
            if (!user) throw new Error("user not found", { cause: { status: 404 } })
            req.user = user
            req.decoded = decoded

        }
        next()
    },
    localFileUpload(fileFieldValidation.Image).array("attachments", 2),
    sendMessageeeeee,
    async (req, res, next) => {
        const result = await sendMessage(req.params.receiverID, req.body.content, req.files, req.user);
        return res.status(201).json({ message: "message sent", result });
    }
);
router.get(
    '/:messageID',
auth,
    getmessaggee,
    async (req, res, next) => {
        const result = await getMessageByID(req.params.messageID, req.user);
        return res.status(200).json({ message: "message is", result });
    }
);
router.get(
    '/list/s',
auth,
 
    async (req, res, next) => {
        const result = await getMessages( req.user);
        return res.status(200).json({ message: "messages is", result });
    }
);
router.delete(
    '/delete/:messageID',
auth,
 getmessaggee,  
    async (req, res, next) => {
        const result = await deleteMessgaya(req.params.messageID,req.user);
        return res.status(200).json({ message: "messages is", result });
    }
);
export { router as messageRouter }