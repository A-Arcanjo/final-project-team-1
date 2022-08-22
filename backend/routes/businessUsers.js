import express from "express";
<<<<<<< HEAD
import { getBusinessData } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getBusinessData);
=======
import { getUserData } from "../controllers/businessController.js";

const router = express.Router();

router.get("/:id", getUserData);  
>>>>>>> b0bed9ec42ea41b722610fdec73139be03cc2a7a

export default router;
