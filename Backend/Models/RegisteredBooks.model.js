import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publication: {
        type: String,
        required: true
    },
    LibraryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Disrtibutor",
        required:true
    },
    LibraryName: {
        type: String,
        ref: "Distributor",
        required: true,
    },
    Address:{
        type :String,
        required: true,
        ref: "Distributor"
    },
    City: {
        type: String,
        ref: "Distributor"
    },
    description: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: "http://via.placeholder.com/350x150"
    },
},{timestamps: true});

const BookModel = mongoose.model("Book Details", BookSchema);

export default BookModel;