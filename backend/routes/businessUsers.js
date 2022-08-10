import express from "express";
import { getUserData } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getUserData);  

export default router;
