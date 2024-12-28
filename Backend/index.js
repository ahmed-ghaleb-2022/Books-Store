import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import env from "dotenv"; 

env.config();

const app = express();

const PORT = 5500

// as middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/books', booksRoute)


mongoose.connect(process.env.mongoDBURL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


