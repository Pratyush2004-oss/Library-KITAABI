import mongoose from "mongoose";

const DistributorSchema = new mongoose.Schema({
    LibraryName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    Mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    Address: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true
    },
    LoginType: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        minlength: 8
    },
    ProfilePic: {
        type: String,
        default: "",
    }
},{timestamps:true});

const Distributor = mongoose.model("Distributor", DistributorSchema);

export default Distributor;