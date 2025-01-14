
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../Types";
import Navbar from "../components/Navbar";

const SingleBook = () => {
  
    const [book, setBook] = useState<Book>();
    const {id} = useParams();

    useEffect(() => {
      fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/books/${id}`)
        .then((res) => res.json())
        .then((data) => setBook(data));
    })

  return (
    <div className="md:px-4 md:py-40 py-20 lg:px-24 bg-sky-500">
      <Navbar />
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="w-1/2">
        <img src={book?.imageURL} alt="" className="mx-auto w-48 md:w-auto" />
      </div>
      <div className=" md:w-1/2 p-4 ">
        <h1 className="font-serif text-4xl text-white">{book?.bookTitle} (Paperback)</h1>
        <h3 className="text-2xl font-semibold text-yellow-300 font-sans"> {book?.authorName} (author)</h3>
        {/* to add in baskets  */}
        <div className="w-full bg-white border-2 border-gray-300 mt-12">
          <div className="p-5 mt-5 flex justify-between items-center">
              <div>
                <p>Paperback  </p>
                <p> {'110'} Pages / Published: 01/09/2014 </p>
              </div>
              <p className="text-2xl font-bold text-end text-sky-600">$ {book?.price}</p>
          </div>
          <div className="p-5 mt-5 flex justify-between items-center border-t-2 border-gray-300">
                <div className="">
                      <label htmlFor="Quantity">Quantity</label>
                    <input className="w-20 ml-3" type="number" placeholder="1" min={1} />
                </div>
                <div className="">
                  <button className="text-gray-800 text-md font-medium rounded bg-yellow-300 border-none outline-none py-2 px-4 text-xl  transition-all ease-in duration-300 hover:opacity-70">Add to Basket</button>
                </div>
                            
              </div>
        </div>

      </div>
    </div>

    </div>
  );
};

export default SingleBook;
