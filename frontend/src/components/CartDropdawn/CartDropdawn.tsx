import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import BookCartItem from "../BookCartItem/BookCartItem";

const CartDropdawn = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { cartBooks } = cartContext;

  return (
    <div className="absolute top-14 right-0 bg-white w-80 h-96 p-4 border-2 border-gray-800 flex flex-col gap-2">
      <div className="flex flex-col gap-4 overflow-y-scroll scroll-smooth flex-grow">
        {cartBooks.map((book) => (
          <BookCartItem book={book} key={book._id} />
        ))}
      </div>
      <button className="bg-yellow-300 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-400 transition-all ease-in duration-200">
        Checkout
      </button>
    </div>
  );
};

export default CartDropdawn;
