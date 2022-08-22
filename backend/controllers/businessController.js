import createError from "http-errors";
import BusinessUser from "../models/businessUser.js";

<<<<<<< HEAD
export const getBusinessData = async (req, res, next) => {
    // retrieve the :id parameter from the request

    const userId = req.params.id;

    let foundUser;

    try {
        foundUser = await BusinessUser.findById(userId);
    } catch {
        return next(
            createError.InternalServerError(
                "Could not query database. Please try again!"
            )
        );
    }

    if (foundUser) {
        const userData = {
            firstName: foundUser.firstName,
        };

        res.json(userData);
    } else {
        return next(createError.NotFound("User could not be found."));
    }
};
=======
// * GET the business user data 
export const getUserData = async (req, res, next) => {
  // retrieve the :id parameter from the request
  const userId = req.params.id;

  let foundUser;

  try {
    foundUser = await BusinessUser.findById(userId);
  } catch {
    return next(
      createError.InternalServerError(
        "Could not query database. Please try again!"
      )
    );
  }

  if (foundUser) {
    const userData = {
      companyName: foundUser.companyName,
    };

    res.json(userData);
  } else {
    return next(createError.NotFound("User could not be found."));
  }
};

// * PATCH a new product
>>>>>>> b0bed9ec42ea41b722610fdec73139be03cc2a7a
