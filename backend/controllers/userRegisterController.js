import createError from "http-errors";
import CustomerUser from "../models/user.js";

export const registerCustomerPost = async (req, res, next) => {
  const { username, password, firstName, lastName, emailAddress } = req.body;

  let foundUsername;
 
  // try to find the username
  try {
      foundUsername = await CustomerUser.findOne({
          username: username,
      })
  } catch {
      return next(createError(500, "Could not query database. Please try again!"));
  }

  if(foundUsername) {
      return next(createError(409, `${username} has already been taken. Please try a different username!`))
  }

  let foundEmail;
  
  // try to find the emailAddress
  try {
    foundEmail = await User.findOne({ emailAddress: emailAddress });
  } catch {
    return next(
      createError(500, "Database could not be queried. Please try again!")
    );
  }

  if (foundEmail) {
    return next(
      createError(
        412,
        `${emailAddress} address has already been used to create an account. Please try a different email address!`
      )
    );
  }

  // create a new user
  const newUser = new CustomerUser({
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    emailAddress: emailAddress,
    favoiteBusiness: [],
    favoriteProducts: [],
    isAdmin: false
  })

  try {
    await newUser.save()
} catch {
    return next(createError(500, `New user could not be created. Please try again!`))
}

res.status(201).json({id: newUser._id })

};
