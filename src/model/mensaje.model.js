// modelo mensaje recibidos

const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    nombres: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    mensaje: {
        type: String,
    }
},
);

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message };