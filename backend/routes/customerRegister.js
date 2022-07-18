import express from "express";

import requiredValues from "../validators/requiredValues";
import registerCustomerValidator from "../validators/registerCustomerValidator";
import checkValidation from "../validators/checkvalidation";

const router = express.Router();

// TODO: Add BusinessRegister Controller into the router..

router.post(
  "/",
  requiredValues(["username", "password", "emailAdress"]),
  registerCustomerValidator(),
  checkValidation
);

export default router;
