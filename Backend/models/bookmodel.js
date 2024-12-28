import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        bookTitle:{
            type:String,
            required: true
        },
        authorName:{
            type:String,
            required: true
        },
        bookDescription:{
            type:String,
            required: true
        },
        imageURL:{
            type:String,
            required: true
        },
        category:{
            type:String
        },
        bookPDFURL:{
            type:String,
            required: true
        },
        price : {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Book = mongoose.model("Book", bookSchema);