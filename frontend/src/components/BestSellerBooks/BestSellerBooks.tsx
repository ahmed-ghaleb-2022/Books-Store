import { useEffect, useState } from "react";
import BookCards from "../BookCards/BookCards";
import { Book } from "../../Types";

const BestSellerBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.data.slice(0, 8)));
  }, []);

  return (
    <div>
      <BookCards books={books} headline="best seller books" />
    </div>
  );
};

export default BestSellerBooks;
