// Modelo de usuario 

const mongoose = require("mongoose");
const validator = require("validator");

const userSchema= new mongoose.Schema({
    nombres:{
        type:String,
        required: true
    },
    apPaterno:{
        type:String,
    },
    apMaterno:{
        type:String,
    },
    correo:{
        type:String,
        unique:true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password:{
        type:String,
        required:true,

    },
},
     

);

const User = mongoose.model('User',userSchema);

module.exports={User};