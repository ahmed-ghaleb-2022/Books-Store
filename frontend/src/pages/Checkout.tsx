import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Navbar from "../components/Navbar";
import MyFooter from "../components/MyFooter/MyFooter";
import CheckoutItem from "../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { cartBooks, cartTotal } = cartContext;

  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] pt-28 bg-[#1A8439]">
        <h2 className="text-4xl text-white font-bold mb-6 leading-snug text-center">
          Checkout
        </h2>
        <div className="flex flex-col items-center px-4 lg:px-24">
          <div className="w-full py-2 flex justify-between border-b-2 border-gray-300">
            <div className="w-1/5 text-center">
              <span className="font-semibold text-xl text-white">Image</span>
            </div>
            <div className="w-1/5 text-center">
              <span className="font-semibold text-xl text-white">Name</span>
            </div>
            <div className="w-1/5 text-center">
              <span className="font-semibold text-xl text-white">Quantity</span>
            </div>
            <div className="w-1/5 text-center">
              <span className="font-semibold text-xl text-white">Price</span>
            </div>
            <div className="w-1/5 text-center">
              <span className="font-semibold text-xl text-white">Remove</span>
            </div>
          </div>

          {cartBooks.map((book) => (
            <CheckoutItem key={book._id} book={book} />
          ))}
        </div>
        <div className="w-full flex justify-end py-4 px-4 lg:px-36">
          <span className="font-semibold text-2xl text-white">Total: {cartTotal.toFixed(2)} </span>
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default Checkout;
