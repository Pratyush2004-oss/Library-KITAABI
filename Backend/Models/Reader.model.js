import mongoose from "mongoose";

const ReaderSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    AadharNumber:{
        type: String,
        unique: true,
        required : true,
        minlength: 12,
        maxlength: 12
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    Mobile:{
        type:String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    City:{
        type:String,
        required: true
    },
    LoginType:{
        type:String,
        required: true
    },
    Password: {
        type:String,
        minlength: 8
    },
    ProfilePic:{
        type: String,
        default: "",
    }
},{timestamps:true});

const Reader = mongoose.model("Reader", ReaderSchema);
export default Reader;