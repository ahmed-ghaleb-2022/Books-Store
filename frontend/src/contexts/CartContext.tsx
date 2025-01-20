import { createContext, ReactNode, useState, useEffect } from "react";
import { Book, CartBooks } from "../Types";

type CartContextType = {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartBooks: CartBooks[];
  setCartBooks: React.Dispatch<React.SetStateAction<CartBooks[]>>;
  addBookToCart: (bookToAdd: Book) => void;
  removeBookFromCart: (bookToRemove: Book) => void;
  clearBookFromCart: (bookToClear: Book) => void;
  cartCounter: number;
  cartTotal: number;
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

const removingCartItem = (
  currentCartBooks: CartBooks[],
  bookToRemove: Book
) => {
  const existingCartItem = currentCartBooks.find(
    (book) => book._id === bookToRemove._id
  );
  if (existingCartItem?.quantity === 1) {
    return currentCartBooks.filter((book) => book._id !== existingCartItem._id);
  }

  return currentCartBooks.map((book) =>
    book._id === bookToRemove._id
      ? { ...book, quantity: book.quantity - 1 }
      : book
  );
};

const clearingCartItem = (cartBooks: CartBooks[], bookToClear: Book) => {
  return cartBooks.filter((book) => book._id !== bookToClear._id);
};

export const CartContext = createContext<CartContextType | null>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartBooks: [],
  setCartBooks: () => {},
  addBookToCart: () => {},
  removeBookFromCart: () => {},
  clearBookFromCart: () => {},
  cartCounter: 0,
  cartTotal:0
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBooks, setCartBooks] = useState<CartBooks[]>([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCounter(cartBooks.reduce((total, book) => total + book.quantity, 0));
    setCartTotal(cartBooks.reduce((total, book) => total + book.quantity * book.price, 0));

  }, [cartBooks]);

  const addBookToCart = (bookToAdd: Book) => {
    setCartBooks(addingCartItem(cartBooks, bookToAdd));
  };

  const removeBookFromCart = (bookToRemove: Book) => {
    setCartBooks(removingCartItem(cartBooks, bookToRemove));
  };

  const clearBookFromCart = (bookToClear: Book) => {
    setCartBooks(clearingCartItem(cartBooks, bookToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartBooks,
    setCartBooks,
    addBookToCart,
    removeBookFromCart,
    clearBookFromCart,
    cartCounter,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
