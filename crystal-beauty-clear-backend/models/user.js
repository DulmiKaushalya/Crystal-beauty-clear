import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email :{
        type: String,
        required: true,
        unique: true
    },
    firstName :{
        type: String,
        required: true
    },
    role :{
        type: String,
        required: true,
        default: 'user'
    },
    password :{
        type: String,
        required: true
    },
    phoneNumber :{
        type: String,
        required: true,
        default :"not given"
    },
    isDisabled :{
        type: Boolean,
        required: true,
        default: false
    },
    isEmailVerified :{
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model('User', userSchema);
export default User; //exporting the model