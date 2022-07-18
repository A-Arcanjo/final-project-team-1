import express from "express";

import requiredValues from "../validators/requiredValues";
import registerBusinessValidator from "../validators/registerBusinessValidator";
import checkValidation from "../validators/checkvalidation";

const router = express.Router();

// TODO: Add BusinessRegister Controller into the router.

router.post(
  "/",
  requiredValues(["username", "password", "emailAdress"]),
  registerBusinessValidator(),
  checkValidation
);

export default router;
