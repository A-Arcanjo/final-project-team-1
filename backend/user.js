import mongoose from "mongoose";

const { Schema } = mongoose;

const customerUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  emailAdress: { type: String, required: true, unique: true },
  favoriteBusiness: [{ businessName: String }],
  isAdmin: { type: Boolean, required: true },
});

const CustomerUser = mongoose.model("CustomerUser", customerUserSchema);

// TODO: Encryption for the password field is not yet implemented.

CustomerUserSchema.pre();

export default CustomerUser;
