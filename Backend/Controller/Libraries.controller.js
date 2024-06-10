import Reader from "../Models/Reader.model.js";
import Distributor from "../Models/distributor.model.js";

// Controller for Getting Libraries Name
export const getLibrariesDistributor = async (req, res) => {
    try {
        const LibraryCity = req.distributor.City;
        const loggedinuser = req.distributor._id;
        const Libraries = await Distributor.find({ City: LibraryCity, _id: { $ne: loggedinuser } });

        if (!Libraries) {
            return res.status(200).json([], { message: "No Registered Libraries in your city" })
        }
        res.status(200).json(Libraries)
    } catch (error) {
        console.log("Error in getLibraries Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error....." });
    }
}
// get Libraries for the Reader
export const getLibrariesReader = async (req, res) => {
    try {
        const LibraryCity = req.Reader.City;
        const Libraries = await Distributor.find({ City: LibraryCity });

        if (!Libraries) {
            return res.status(200).json([], { message: "No Registered Libraries in your city" })
        }
        res.status(200).json(Libraries)
    } catch (error) {
        console.log("Error in getLibraries Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error....." });
    }
}

