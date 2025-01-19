

export type Book = {
    _id: string;
    bookTitle: string;
    authorName: string;
    bookDescription: string;
    imageURL: string;
    category: string;
    bookPDFURL: string;
    price: number;

}

export type CartBooks = {
    quantity: number;
} & Book;