import { CartBooks } from "../../Types";

const BookCartItem = ({ book }: { book: CartBooks }) => {
  const { bookTitle, imageURL, quantity } = book;
  return (
    <div className="flex gap-2 mb-2">
      <div className="w-24">
        <img src={imageURL} alt="" className="w-full h-24 object-fill border-2 border-gray-300" />
      </div>
      <div className="flex flex-col w-full justify-center">
        <h2 className="text-lg font-semibold">{bookTitle}</h2>
        <span className="font-semibold">
          {quantity} x $ {book.price.toFixed(2)}{" "}
        </span>
      </div>
    </div>
  );
};

export default BookCartItem;
