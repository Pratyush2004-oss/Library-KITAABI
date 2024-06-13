import bcrypt from "bcryptjs";
import Reader from "../Models/Reader.model.js";
import Distributor from "../Models/distributor.model.js";
import generatetikenandSetCookie from "../Utils/GenerateToken.js";

// Controller for Reader Signup
export const SignupUser = async (req, res) => {
    try {
        const { fullname, AadharNumber, email, Mobile, City, Password, ConfirmPassword } = req.body;
        // Checking whether the password matches or not
        if (Password !== ConfirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        // Checking if the user is already registered or not
        let Read = await Reader.findOne({ email });
        if (Read) {
            return res.status(400).json({
                error: "Email already in use.",
            });
        }
        Read = await Reader.findOne({ Mobile });
        if (Read) {
            return res.status(400).json({
                error: "Mobile Number already in use.",
            });
        }
        Read = await Reader.findOne({ AadharNumber });
        if (Read) {
            return res.status(400).json({
                error: "Aadhar Number already in use.",
            });
        }

        // Setting the Login type to the Reader
        const LoginType = "Reader";

        // Setting ProfilePic for the Reader
        const ProfilePic = "https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png";

        // Hashed Password Here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const newReader = new Reader({
            fullname,
            AadharNumber,
            email,
            Mobile,
            City: City.toLowerCase(),
            LoginType,
            Password: hashedPassword,
            ProfilePic: ProfilePic,
        });
        if (newReader) {
            // Generate JWT Token
            generatetikenandSetCookie(newReader._id, res)


            // save the data to the database
            await newReader.save();
            res.status(201).json({
                _id: newReader._id,
                fullname: newReader.fullname,
                ProfilePic: newReader.ProfilePic,
                email: newReader.email,
                AadharNumber: newReader.AadharNumber,
                Mobile: newReader.Mobile,
                City: newReader.City,
                LoginType: newReader.LoginType,
                message: "New User registered Successfully!......",
            });
        }
        else {
            res.ststus(400).json({ error: "Invalid User Data" });
        }
    } catch (error) {
        console.log("Error In Reader SignUp Controller ", error.message);
        res.status(500).json({ error: "Internal Server Error!..." });
    }
};

// Controller for Distributor Signup
export const SignupDistributor = async (req, res) => {
    try {
        const { LibraryName, email, Mobile, Address, City, Password, ConfirmPassword } = req.body;
        // chaecking whether the password is right or wrong
        if (Password !== ConfirmPassword) {
            return res.status(400).json({ error: "Passwords do not match!....." });
        }

        // Checking if the user is already registered or not
        let Distribute = await Distributor.findOne({ email });
        if (Distribute) {
            return res.status(409).json({ error: "Email already in use!....." });
        }
        Distribute = await Distributor.findOne({ Mobile });
        if (Distribute) {
            return res.status(409).json({ error: "Mobile Number already in use!....." });
        }

        // Setting Login type to Distributor
        const LoginType = "Distributor";

        // Setting ProfilePic for the Reader
        const ProfilePic = "https://i.pinimg.com/originals/d1/57/2e/d1572ea6a68aff6992c72b2da20ca276.jpg";

        // Hashed Password Here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt);

        const newDistributor = new Distributor({
            LibraryName,
            email,
            Mobile,
            Address,
            City : City.toLowerCase(),
            Password: hashedPassword,
            LoginType,
            ProfilePic: ProfilePic
        })

        if (newDistributor) {
            // Generate JWT token
            generatetikenandSetCookie(newDistributor._id, res)


            // Saving the User to Database
            await newDistributor.save();

            // returning the responses
            res.status(201).json({
                _id: newDistributor._id,
                LibraryName: newDistributor.LibraryName,
                Address: newDistributor.Address,
                email: newDistributor.email,
                City: newDistributor.City,
                Mobile: newDistributor.Mobile,
                LoginType: newDistributor.LoginType,
                ProfilePic: newDistributor.ProfilePic,
                message: 'Distrbutor has been registered successfully!......',
            });
        }
        else {
            res.ststus(400).json({ error: "Invalid User Data" });
        }
    } catch (error) {
        console.log("Error In Validation Of Data In Distributor Sign Up Controller : ", error.message);
        return res.status(500).json({ error: "Internal Server Error!...." });
    }
};

//Controller for Login for both User and Distributor
export const loginUser = async (req, res) => {
    try {
        const { email, Password, LoginType } = req.body;

        // Login request for the Reader
        if (LoginType === "Reader") {
            const reader = await Reader.findOne({ email });
            const isPasswordCorrect = await bcrypt.compare(Password, reader.Password || "");
            if (!reader || !isPasswordCorrect) {
                return res.status(401).json({ error: 'Invalid Credentials' });
            }
            // generating Cookie or token
            generatetikenandSetCookie(reader._id, res);

            res.status(200).json({
                _id: reader._id,
                fullname: reader.fullname,
                ProfilePic: reader.ProfilePic,
                email: reader.email,
                AadharNumber : reader.AadharNumber,
                Mobile: reader.Mobile,
                City: reader.City,
                LoginType: reader.LoginType,
                message: "User Login Successfully!......",
            })
        }
        // Login request for the 
        else if (LoginType === "Distributor") {
            const distributor = await Distributor.findOne({ email });
            const isPasswordCorrect = await bcrypt.compare(Password, distributor.Password || "");
            if (!distributor || !isPasswordCorrect) {
                return res.status(401).json({ message: 'Invalid Credentials' });
            }
            // generating Cookie or token
            generatetikenandSetCookie(distributor._id, res);

            res.status(201).json({
                _id: distributor._id,
                LibraryName: distributor.LibraryName,
                Address: distributor.Address,
                email: distributor.email,
                City: distributor.City,
                Mobile: distributor.Mobile,
                LoginType: distributor.LoginType,
                ProfilePic: distributor.ProfilePic,
                message: 'Distrbutor has been login successfully!......',
            });
        }

    } catch (error) {
        console.log("Error In Login Controller : ", error.message);
        return res.status(500).json({ error: "Internal Server Error!...." });
    }
};

// Controller for Logout
export const LogoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", { MaxAge: 0 })
        return res.status(200).json({ message: "Logged Out Successfully!" })

    } catch (error) {
        console.log("Error In Logout Controller : ", error.message);
        return res.status(500).json({ error: "Internal Server Error!...." });
    }
};
