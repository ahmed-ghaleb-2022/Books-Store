import { useEffect, useState } from "react";
import { Book } from "../Types";
import Navbar from "../components/Navbar";
import ShopBookCard from "../components/ShopBookCard/ShopBookCard";
import MyFooter from "../components/MyFooter/MyFooter";

const Shop = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filtered, setFiltered] = useState<string>("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books?category=${filtered}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.data));
  }, [filtered]);

  return (
    <>
      <Navbar />
      <div className="pt-28 pb-16 px-4 lg:px-24 min-[1600px]:px-56 bg-[#1A8439]">
        <h2 className="text-5xl text-center font-bold text-yellow-300">
          All Books are here
        </h2>

        <div className="flex items-center gap-4 w-full justify-end">
          <span className="text-white text-2xl font-semibold">filter:</span>
          <select
            name="filter"
            onChange={(e) => setFiltered(e.target.value)}
            id="filter"
            className="bg-white text-gray-900 text-lg font-semibold px-4 py-2 rounded"
          >
            <option value="">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12">
          {books.map((book) => (
            <ShopBookCard
              key={book._id}
              imgSrc={book.imageURL}
              title={book.bookTitle}
              description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
            />
          ))}
        </div>
      </div>

      <MyFooter />
    </>
  );
};

export default Shop;
