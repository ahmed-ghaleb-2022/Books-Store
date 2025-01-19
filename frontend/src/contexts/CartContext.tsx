import { createContext, ReactNode, useState, useEffect } from "react";
import { Book, CartBooks } from "../Types";

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartBooks: CartBooks[];
  setCartBooks: React.Dispatch<React.SetStateAction<CartBooks[]>>;
  addBookToCart: (bookToAdd: Book) => void;
  cartCounter: number;
};

const addingCartItem = (currentCartBooks: CartBooks[], bookToAdd: Book) => {
  const existingCartItem = currentCartBooks.find(
    (book) => book._id === bookToAdd._id
  );
  if (existingCartItem) {
    return currentCartBooks.map((book) =>
      book._id === bookToAdd._id
        ? { ...book, quantity: book.quantity + 1 }
        : book
    );
  }

  return [...currentCartBooks, { ...bookToAdd, quantity: 1 }];
};

export const CartContext = createContext<CartContextType | null>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartBooks: [],
  setCartBooks: () => {},
  addBookToCart: () => {},
  cartCounter: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBooks, setCartBooks] = useState<CartBooks[]>([]);
  const [cartCounter, setCartCounter] = useState(0);


  useEffect(() => {
    setCartCounter(cartBooks.reduce((total, book) => total + book.quantity, 0));
  }, [cartBooks]);


  const addBookToCart = (bookToAdd: Book) => {
    setCartBooks(addingCartItem(cartBooks, bookToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartBooks,
    setCartBooks,
    addBookToCart,
    cartCounter
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
