import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();
// as middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/books', booksRoute)


mongoose.connect(mongoDBURL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

//Y5ayDsg1EJwrRHDf
