import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
// ! To upload an image and retrieve image
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";

import productsRouter from "./routes/products.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js";
import loginRouter from "./routes/login.js";
import registerCustomerRouter from "./routes/customerRegister.js";
import registerBusinessRouter from "./routes/businessRegister.js";
import customerUsersRouter from "./routes/customerUsers.js";
import businessUsersRouter from "./routes/businessUsers.js";

const app = express();

dotenv.config();

// ! To upload an image and retrieve image
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pptto.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

// check mongodb connection
mongoose.connection.on("open", () =>
  console.log("Database connection established!")
);
mongoose.connection.on("error", () => console.error);

// allow cors requests
app.use(cors());

// parse JSON data received
app.use(express.json());

// Use morgan to make a small log every time a request is received
app.use(morgan("tiny"));

// register customer user
app.use("/registerCustomer", registerCustomerRouter);

// register business user
app.use("/registerBusiness", registerBusinessRouter);

// login post
app.use("/login", loginRouter);

//products router
app.use("/products", productsRouter);

// customer Users
app.use("/customerUsers", customerUsersRouter);

// business Users
app.use("/businessUsers", businessUsersRouter);

app.use(globalErrorHandler);

app.listen(3001, () => {
  console.log(`Server has started on port  3001!`);
});
