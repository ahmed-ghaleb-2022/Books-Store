import { useEffect, useState } from "react";
import { Book } from "../Types";
import Navbar from "../components/Navbar";
import ShopBookCard from "../components/ShopBookCard/ShopBookCard";

const Shop = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books`)
      .then((res) => res.json())
      .then((data) => setBooks(data.data));
  }, []);

  return (
    <>
    <Navbar />
    <div className="pt-28 pb-16 px-4 lg:px-24 bg-[#1A8439] py-28">
      <h2 className="text-5xl text-center font-bold text-yellow-300">All Books are here</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12">
        {
          books.map((book) => (
          <ShopBookCard
            imgSrc={book.imageURL}
            title={book.bookTitle}
            description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          />
        ))
        }
      </div>
    </div>

    </>
  )
}

export default Shop