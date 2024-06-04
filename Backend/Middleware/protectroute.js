import jwt from "jsonwebtoken";
import Distributor from "../Models/distributor.model.js";

const protectroute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).send({error: 'Unauthorized : No token provided.....'});
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(401).send({error: 'Unauthorized : Invalid provided....'});
        }
        
        const distributor = await Distributor.findById(decoded.userId).select("-Password");
        if (!distributor) {
            return res.status(401).send({ error: "No distributor with that UserID...." });
        }

        req.distributor = distributor;

        next();

    } catch (error) {
        console.log("Error in Protect route middleware : " , error.message);
        res.status(500).json({error : "Internal Server Error...."})
    }
}

export default protectroute;