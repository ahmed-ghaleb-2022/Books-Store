import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Book } from "../../Types";
import { FaCartShopping } from "react-icons/fa6";

const ShopBookCard = ({ book }: { book: Book }) => {
  const { bookTitle, bookDescription, imageURL } = book;
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { addBookToCart } = cartContext;

  const handleAddToCart = () => {
    addBookToCart(book);
  };

  return (
    <div className="bg-white rounded-md shadow-md shadow-yellow-200 p-3 flex flex-col justify-between items-center ">
      <div className="w-60 h-80 mx-auto">
        <img
          src={imageURL}
          alt=""
          className="w-full h-full border-2 border-gray-300"
        />
      </div>
      <h2 className="text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
        {bookTitle}
      </h2>
      <p className="font-normal text-start text-gray-700 dark:text-gray-400">
        {bookDescription.slice(0, 100)} ...
      </p>
      <button
        onClick={handleAddToCart}
        className=" mt-2 bg-[#115525] text-white  font-semibold px-5 py-2 rounded hover:bg-[#1d7c39] transition-all ease-in duration-200 flex items-center gap-2"
      >
        Buy Now <FaCartShopping className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ShopBookCard;
