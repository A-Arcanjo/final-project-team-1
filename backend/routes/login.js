import express from "express";
import requiredValues from "../validators/requiredValues";
import checkValidation from "../validators/checkvalidation";

const router = express.Router();

// TODO: Add Login Controller into the router.
router.post("/", requiredValues(["username", "password"]), checkValidation);

export default router;
