import User from "../models/user";
import BusinessUser from "../models/businessUser";

export const loginPost = async (req, res, next) => {
  const { username, password } = req.body;
};

let foundUser;

// TODO Verify user model. Only User or BusinessUser too?

try {
  foundUser = await User.findOne({ username: username });
} catch {
  return next(
    createError(500, "Database couldn't be queried. Please try again")
  );
}

if (found) {
  // TODO Check Password
  let isValidPassword;

  try {
    // TODO Encryption missing.
  } catch {
    return next(
      createError(500, "Logging in process failed. Please try again")
    );
  }

  if (!isValidPassword) {
    return next(createError(401, "Incorrect password. Please try again"));
  }

  // TOKEN????

  // TODO Response for user-mistake.
}
