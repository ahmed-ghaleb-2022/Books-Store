import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartBooks } from "../../Types";

const CheckoutItem = ({ book }: { book: CartBooks }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error("CartContext is not available");
  }
  const { addBookToCart, removeBookFromCart, clearBookFromCart } = cartContext;

  const addCartItem = () => {
    addBookToCart(book);
  };

  const removeCartItem = () => {
    removeBookFromCart(book);
  };
  const clearCartItem = () => {
    clearBookFromCart(book);
  };
  return (
    <div className="w-full py-2 flex justify-between items-center mb-2">
      <div className="w-1/5">
        <div className="w-36  mx-auto">
          <img
            src={book.imageURL}
            alt={book.bookTitle}
            className="w-full h-48 object-fill"
          />
        </div>
      </div>
      <div className="w-1/5 text-center">
        <span className="font-semibold text-2xl text-yellow-300">
          {book.bookTitle}
        </span>
      </div>
      <div className="w-1/5 text-center flex items-center justify-center">
        <IoIosArrowBack
          className="text-2xl text-yellow-300 cursor-pointer"
          onClick={removeCartItem}
        />
        <span className="font-semibold text-2xl text-white">
          {book.quantity}
        </span>
        <IoIosArrowForward
          className="text-2xl text-yellow-300 cursor-pointer"
          onClick={addCartItem}
        />
      </div>
      <div className="w-1/5 text-center">
        <span className="font-semibold text-2xl text-yellow-300">
          $ {(book.price * book.quantity).toFixed(2)}
        </span>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <IoIosClose
          className="font-semibold text-5xl text-white cursor-pointer"
          onClick={clearCartItem}
        />
      </div>
    </div>
  );
};

export default CheckoutItem;
