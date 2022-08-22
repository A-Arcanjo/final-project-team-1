import express from "express";
import { getUserData, updateProducts } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getUserData); 

// update products list
router.patch("/:id/products", updateProducts)

export default router;
