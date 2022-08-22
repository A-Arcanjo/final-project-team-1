import express from "express";
import { productPost } from "../controllers/productController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", productPost, upload.single(`productImage`))

export default router;
