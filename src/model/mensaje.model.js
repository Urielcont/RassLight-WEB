// modelo mensaje recibidos
import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    mensaje: {
        type: String,
        required: true
    }
},
);

const Message = mongoose.model('Message', messageSchema);

export default Message;