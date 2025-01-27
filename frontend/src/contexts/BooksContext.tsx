import { createContext, useState, useEffect, ReactNode } from "react";
import { Book } from "../Types";

interface BookContextType {
  books: Book[];
  loading: boolean;
}

export const BookContext = createContext<BookContextType | null>({
  books: [],
  loading: true,
});

export const BookProvider = ({ children }:{ children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books`); 
      const data = await response.json();
      setBooks(data.data);

    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, loading }}>
      {children}
    </BookContext.Provider>
  );
};
