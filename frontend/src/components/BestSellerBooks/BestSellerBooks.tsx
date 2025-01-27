import BookCards from "../BookCards/BookCards";
import {useBookContext} from "../../contexts/useBookContext";

const BestSellerBooks = () => {
  
  const { books, loading } = useBookContext();
  

  return (
    <div>
      <BookCards books={books.slice(0, 8)} isloading={loading} headline="best seller books" />
    </div>
  );
};

export default BestSellerBooks;
