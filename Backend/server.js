// importing Predefined Packages
import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./DB/conn.js";
import cookieParser from "cookie-parser";


// importing user defined packages or files
import authRoutes from "./Routes/auth.routes.js";
import registeredBooks from "./Routes/registeredBooks.routes.js";

// VAriables Declared
const app = express();
const PORT = process.env.PORT || 5000;

// configuration the port from the .env file
dotenv.config();

app.use(express.json()); // from req.body parse the data to the json format
app.use(cookieParser()); // for handling cookies in middlewares


app.use("/api/auth",authRoutes);
app.use("/api/Books",registeredBooks);




app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Listen to the port ${PORT}`)
});
