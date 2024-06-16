import express from "express";
import { registerBooks, getBooks, getBooksForReader, getBooksbyCityReader, getBooksbyCityDistributor } from "../Controller/RegisterBooks.controller.js";
import protectroute from "../Middleware/protectroute.js";
import protectrouteReader from "../Middleware/protectrouteReader.js";

const router = express.Router();

router.post('/registerBooks', protectroute, registerBooks);
router.get('/getBooks', protectroute, getBooks);
router.get('/getBooksforReader/:id',getBooksForReader);
router.get('/getBooksbyCityReader', protectrouteReader, getBooksbyCityReader);
router.get('/getBooksbyCityDistributor', protectroute, getBooksbyCityDistributor);
export default router;