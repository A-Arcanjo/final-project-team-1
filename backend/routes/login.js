import express from "express";
import requiredValues from "../validators/requiredValues";
import checkValidation from "../validators/checkvalidation";

const router = express.Router();

// TODO: Add Login Controller into the router.
router.post("/", requiredValues(["username", "password"]), checkValidation);

export default router;

const newUser = new User({
  username: username,
  password: password,
  firstName: firstName,
  lastName: lastName,
  emailAddress: emailAddress,
  isAdmin: false,
  albums: [],
});


