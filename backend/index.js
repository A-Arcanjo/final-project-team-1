import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

// allow cors requests
app.use(cors());

// parse JSOn data received
app.use(express.json());

app.listen(3001, () => {
  console.log(`Server has started on port  ${3001}!`);
});
