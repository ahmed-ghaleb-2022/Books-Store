
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../Types";

const SingleBook = () => {
  
    const [book, setBook] = useState<Book>();
    const {id} = useParams();

    useEffect(() => {
      fetch(`http://127.0.0.1:3000/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    })

  return (
    <div className="mt-28 px-4 lg:px-24">
        <img src={book?.imageURL} alt="" className="h-96" />
      <p>{book?._id}</p> <p>{book?.bookTitle}</p>
    </div>
  );
};

export default SingleBook;
