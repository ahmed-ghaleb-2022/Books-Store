

import BookCards from "../BookCards/BookCards";
import { useBookContext } from "../../contexts/useBookContext";


const OtherBooks = () => {
  const { books, loading } = useBookContext();
  
    return (
      <div>
        <BookCards books={books.slice(6, 15)} isloading={loading} headline="Other Books" />
      </div>
    );
}

export default OtherBooks