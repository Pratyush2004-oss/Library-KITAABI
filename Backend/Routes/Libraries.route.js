import express from "express";
import protectroute from "../Middleware/protectroute.js";
import { getLibrariesDistributor, getLibrariesReader } from "../Controller/Libraries.controller.js";
import protectrouteReader from "../Middleware/protectrouteReader.js";
const router = express.Router();

router.get('/LibrariesDistributor', protectroute, getLibrariesDistributor)
router.get('/LibrariesReader', protectrouteReader, getLibrariesReader)


export default router;