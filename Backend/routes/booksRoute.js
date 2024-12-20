import express from "express";
import { Book } from "../models/bookmodel.js";

const router = express.Router();

//Route for save a new Book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.bookTitle ||
      !request.body.authorName ||
      !request.body.bookDescription||
      !request.body.imageURL||
      !request.body.category||
      !request.body.bookPDFURL
    ) {
      return response.status(400).send({
        message: "Send All required fields : title, author, publish Year",
      });
    }
    const newBook = {
      bookTitle: request.body.bookTitle,
      authorName: request.body.authorName,
      bookDescription: request.body.bookDescription,
      imageURL: request.body.imageURL,
      category: request.body.category,
      bookPDFURL: request.body.bookPDFURL,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get All Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get a Book by id from database
router.get("/:id", async (request, response) => {
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

router.put("/:id", async (request, response) => {
  try {
    if (
        !request.body.bookTitle ||
        !request.body.authorName ||
        !request.body.bookDescription||
        !request.body.imageURL||
        !request.body.category||
        !request.body.bookPDFURL
    ) {
      return response.status(400).send({
        message: "Send All required fields : title, author, publish Year",
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
router.delete("/:id", async (request, response) => {
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

export default router;
