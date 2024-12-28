import { useEffect, useState } from "react";
import { Book } from "../../Types";
import BookCards from "../BookCards/BookCards";


const OtherBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
      fetch("http://127.0.0.1:5000/books")
        .then((res) => res.json())
        .then((data) => setBooks(data.data.slice(4, 8)));
    }, []);
  
    return (
      <div>
        <BookCards books={books} headline="Other Books" />
      </div>
    );
}

export default OtherBooks