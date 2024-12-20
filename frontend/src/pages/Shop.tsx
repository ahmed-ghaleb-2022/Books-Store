import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { Book } from "../Types";

const Shop = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data.data));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold">All Books are here</h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12">
        {
          books.map((book) => (
            <Card
            key={book._id}>
              <img src={book.imageURL} alt="" className="h-96" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all ease-in duration-300">Buy Now</button>
          </Card>
        ))
        }
      </div>
    </div>
  )
}

export default Shop