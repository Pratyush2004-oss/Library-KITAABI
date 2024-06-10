import jwt from "jsonwebtoken";
import Reader from "../Models/Reader.model.js";


const protectrouteReader = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).send({error: 'Unauthorized : No token provided.....'});
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(401).send({error: 'Unauthorized : Invalid provided....'});
        }
        
        const reader = await Reader.findById(decoded.userId).select("-Password");
        if (!reader) {
            return res.status(401).send({ error: "No reader with that UserID...." });
        }

        req.Reader = reader;

        next();

    } catch (error) {
        console.log("Error in Protect route for Reader middleware : " , error.message);
        res.status(500).json({error : "Internal Server Error...."})
    }
}

export default protectrouteReader;