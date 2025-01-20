
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext"; 

import { FaCartShopping } from "react-icons/fa6";

const CartIcon = () => {

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { isCartOpen, setIsCartOpen, cartCounter } = cartContext;



  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <div className="relative cursor-pointer " onClick={toggleCart}>
        <FaCartShopping className="text-5xl text-yellow-300 hover:text-yellow-300/80 transition-colors ease-in duration-200" />
        <span className="absolute top-0 right-2 bg-red-500 text-base text-white w-6 h-6 flex items-center justify-center rounded-full ">{cartCounter}</span>
    </div>
  )
}

export default CartIcon