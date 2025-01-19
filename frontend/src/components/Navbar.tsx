import { useContext, useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import CartIcon from "./CartIcon/CartIcon";
import CartDropdawn from "./CartDropdawn/CartDropdawn";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { user } = authContext;

  console.log(user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "/", name: "Home" },
    { link: "/shop", name: "Shop" },
    { link: "#", name: "About" },
    { link: "#", name: "Blog" },
  ];


  /* Cart  */

  const { isCartOpen } = useContext(CartContext);


  return (
    <header className="w-full z-50 md:bg-transparent bg-[#1F9B4A] fixed top-0 left-0 right-0 transition-all duration-300 ease-in ">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-[#1F9B4A]" : ""
        } `}
      >
        <div className="flex items-center justify-between text-base gap-8 relative">
          {/* logo here */}
          <Link
            to="/"
            className="text-2xl font-bold text-yellow-300 flex items-center gap-2"
          >
            <FaBlog className="inline-block" /> Book Store
          </Link>

          {/* navItem for large screen  */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, name }, index) => (
              <Link
                key={index}
                to={link}
                className="block text-lg font-semibold text-yellow-300 cursor-pointer uppercase hover:text-[#f5b744]"
              >
                {name}
              </Link>
            ))}
          </ul>

          {/* btn for large screen  */}
          <div className="space-x-12 hidden lg:flex items-center">
            <Link to="/admin/dashboard">
              {" "}
              <span className="w-5 px-4 py-2 text-md font-semibold text-black rounded bg-yellow-300 hover:bg-btn_primary transition-all ease-in duration-200">
                Dashboard
              </span>
            </Link>
            <CartIcon />
          </div>
         { isCartOpen && <CartDropdawn />}

          {/* menu btn for small screen  */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-5 h-5 text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navItem for small screen  */}
        <div
          className={`space-y-2 px-4 mt-16 py-7 md:hidden  ${
            isSticky ? "bg-sky-600" : "bg-sky-500"
          }  ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}
        >
          {isMenuOpen && (
            <ul className="flex flex-col space-y-1">
              {navItems.map(({ link, name }, index) => (
                <Link
                  key={index}
                  to={link}
                  className="block text-base text-white hover:bg-sky-700 p-4 cursor-pointer uppercase"
                >
                  {name}
                </Link>
              ))}
              <Link
                to={"/admin/dashboard"}
                className="block text-base text-white hover:bg-sky-700 p-4 cursor-pointer uppercase"
              >
                Dashboard
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
