import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.mongo_db_URL)
        console.log("Connected too the MongoDB Database........")
    }
    catch(error){
        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connectToMongoDB