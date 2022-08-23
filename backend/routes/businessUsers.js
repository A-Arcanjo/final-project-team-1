import express from "express";

import { getBusinessData, updateProducts } from "../controllers/businessController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", getBusinessData);

// PATCH a product
router.patch("/:id/products", updateProducts, auth)

export default router;
