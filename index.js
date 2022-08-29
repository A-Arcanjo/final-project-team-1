import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

import postRoutes from "./routes/posts.js";

import productsRouter from "./routes/products.js";

import globalErrorHandler from "./middleware/globalErrorHandler.js";
import loginRouter from "./routes/login.js";
import registerCustomerRouter from "./routes/customerRegister.js";
import registerBusinessRouter from "./routes/businessRegister.js";

import customerRouter from "./routes/customerUsers.js";
import businessRouter from "./routes/businessUsers.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

dotenv.config();

// connect to mongodb
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pptto.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

// check mongodb connection
mongoose.connection.on("open", () =>
  console.log("Database connection established!")
);
mongoose.connection.on("error", () => console.error);

// connect DB with heroku
const uri = process.env.MONGODB_URI;

// allow cors requests
app.use(cors());

// parse JSON data received
app.use(express.json());

// Use morgan to make a small log every time a request is received
app.use(morgan("tiny"));

// app.use("/home", enterPage);

// register customer user
app.use("/registerCustomer", registerCustomerRouter);

// register business user
app.use("/registerBusiness", registerBusinessRouter);

// login post
app.use("/login", loginRouter);

//products router
app.use("/products", productsRouter);

// customer Users
app.use("/customerUsers", customerRouter);

// business Users
app.use("/businessUsers", businessRouter);

app.use("/posts", postRoutes);

app.use(globalErrorHandler);

app.use(express.static(path.join(__dirname, "font-end/build")));

app.listen(3001, () => {
  console.log(`Server has started on port  3001!`);
});
