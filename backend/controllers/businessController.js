import createError from "http-errors";
import BusinessUser from "../models/businessUser.js";

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
      products: [],
    };

    res.json(userData);
  } else {
    return next(createError.NotFound("User could not be found."));
  }
};

// * PATCH a new product

export const updateProducts = async (req, res, next) => {
  const productId = req.body.id;
  const userId = req.params.id;

  let findUser;

  try {
    findUser = await BusinessUser.findById(userId);
  } catch {
    return next(
      createError(500, "Query could not be completed. Please try again!")
    );
  }
  // try to find the product in the business User collection
  const foundProduct = findUser.products.find(
    (existingId) => existingId == productId
  );

  // if product was not found add the product to the array
  if (!foundProduct) {
    let updatedUser;
    try {
      updatedUser = await BusinessUser.findByIdAndUpdate(
        userId,
        {
          $push: { products: productId },
        },
        { new: true, runValidators: true }
      );
    } catch {
      return next(
        createError(500, "User could not be updated. Please try again!")
      );
    }
  

  // populate the array with the product values
  await updatedUser.populate("products", {
    _id: true,
    productType:true,
    productName:true,
    productDescription: true,
    productImage:true,
  });

  res.json({ products: updatedUser.products });
} else {
  next(409, "The item already exists!");
}
};
