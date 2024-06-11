import express from "express";
import { registerBooks, getBooks, getBooksForReader } from "../Controller/RegisterBooks.controller.js";
import protectroute from "../Middleware/protectroute.js";

const router = express.Router();

router.post('/registerBooks', protectroute, registerBooks);
router.get('/getBooks', protectroute, getBooks);
router.get('/getBooksforReader/:id',getBooksForReader);
export default router;