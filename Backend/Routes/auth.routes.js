import express from "express";
import { SignupUser, loginUser, LogoutUser, SignupDistributor } from "../Controller/auth.controller.js";

const router = express.Router();

//Route for SignUp page
// for reader
router.post("/signupReader", SignupUser);

// for Distributor
router.post("/signupDistributor", SignupDistributor);

// Router for Login page
router.post("/login", loginUser);

// Router For Logout of the user
router.post("/logout", LogoutUser);

export default router