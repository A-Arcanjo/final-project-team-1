import createError from "http-errors";
import CustomerUser from "../models/customerUser.js";
import BusinessUser from "../models/businessUser.js";

export const loginPost = async (req, res, next) => {
  const { username, password } = req.body;

  let foundUser;

  // try to find the user in the CustomerUser collection, if !found try the BusinessUser collection
  try {
    foundUser = await CustomerUser.findOne({
      username: username,
      password: password,
    });

    if (!foundUser) {
      try {
        foundUser = await BusinessUser.findOne({
          username: username,
          password: password,
        });
        console.log("FoundUser", foundUser);
      } catch {
        return next(
          createError(500, "Database couldn't be queried. Please try again")
        );
      }
    }
  } catch {
    return next(
      createError(500, "Database couldn't be queried. Please try again")
    );
  }

  res.json({
    id: foundUser._id,
    userType: foundUser.userType,
    username: foundUser.username,
  });
};

// TODO Encryption missing.

// TOKEN????

// TODO Response for user-mistake.
