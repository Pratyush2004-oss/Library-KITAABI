import express from "express";
import { registerBooks, getBooks } from "../Controller/RegisterBooks.controller.js";
import protectroute from "../Middleware/protectroute.js";

const router = express.Router();

router.post('/registerBooks', protectroute, registerBooks);
router.get('/getBooks', protectroute, getBooks);
export default router;