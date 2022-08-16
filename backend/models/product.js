import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  productType: { type: String, required: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  // TODO: How to implement the photos is not clear yet.
  productImage: String,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
