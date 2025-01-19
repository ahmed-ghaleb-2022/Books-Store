import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import env from "dotenv"; 
import { Book } from "./models/bookmodel.js";

env.config();

const app = express();

const PORT = 5500

// as middleware
app.use(cors());
app.use(express.json());

app.get("/hallo", (req, res) => {
  res.send("Hello World!");
});


//Route for save a new Book
app.post("/books", async (request, response) => {
  try {
    if (
      !request.body.bookTitle ||
      !request.body.authorName ||
      !request.body.bookDescription||
      !request.body.imageURL||
      !request.body.category||
      !request.body.bookPDFURL||
      !request.body.price
    ) {
      return response.status(400).send({
        message: "Send All required fields ",
      });
    }
    const newBook = {
      bookTitle: request.body.bookTitle,
      authorName: request.body.authorName,
      bookDescription: request.body.bookDescription,
      imageURL: request.body.imageURL,
      category: request.body.category,
      bookPDFURL: request.body.bookPDFURL,
      price: request.body.price
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get All Books from database
app.get("/books", async (request, response) => {
  try {
    const {category} = request.query;
    const filter = category ? { category } : {};
    const books = await Book.find(filter);

    return response.status(200).json({
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get a Book by id from database
app.get("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Update a Book

app.put("/books/:id", async (request, response) => {
  try {
    if (
        !request.body.bookTitle ||
        !request.body.authorName ||
        !request.body.bookDescription||
        !request.body.imageURL||
        !request.body.category||
        !request.body.bookPDFURL||
        !request.body.price
    ) {
      return response.status(400).send({
        message: "Send All required fields ",
      });
    }
    const { id } = request.params;
    const result = await Book.findByIdAndUpdate(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for delete a book
app.delete("/books/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await Book.findByIdAndDelete(id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});





mongoose.connect(process.env.mongoDBURL).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


