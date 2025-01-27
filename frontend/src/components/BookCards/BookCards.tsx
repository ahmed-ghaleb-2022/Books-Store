import { useContext } from "react";
import { Link } from "react-router-dom";
import type { Book } from "../../Types";
import { FaCartShopping } from "react-icons/fa6";
import "./BookCards.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/modules/pagination-element.min.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { CartContext } from "../../contexts/CartContext";

type BookCardProps = {
  books: Book[];
  isloading: boolean;
  headline: string;
};

const BookCards = ({ books, isloading, headline }: BookCardProps) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available");
  }

  const { addBookToCart } = cartContext;

  const handleAddToCart = (book: Book) => {
    addBookToCart(book);
  };

  if (isloading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-[#1c883c] my-5">
        {headline}
      </h2>

      {/* cards  */}
      <div className="cards mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link
                to={`/book/${book._id}`}
                className="mb-12 h-[432px] flex flex-col justify-between items-center"
              >
                <div className="relative">
                  <div className="w-60 h-80 mx-auto">
                    <img
                      src={book.imageURL}
                      alt=""
                      className="w-full border-2 border-gray-300"
                    />
                  </div>
                  <button
                    onClick={(event) => {
                      event.preventDefault(); 
                      handleAddToCart(book);
                    }}
                    className="absolute top-3 right-3 bg-[#1A8439] hover:bg-[#1a522a] p-2 rounded"
                  >
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="flex flex-col items-center justify-between flex-grow">
                  <h3 className="text-xl font-bold">{book.bookTitle}</h3>
                  <p className="text-lg text-green-700 font-semibold">
                    {book.authorName}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold">${book.price}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
