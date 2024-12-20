import { useEffect, useState } from "react";
import { Book } from "../../Types";
import { useParams } from "react-router-dom";


const EditBooks = () => {
    const [book, setBook] = useState<Book>();
    const {id} = useParams();

      useEffect(() => {
          fetch(`http://127.0.0.1:3000/books/${id}`)
            .then((res) => res.json())
            .then((data) => setBook(data));
        })

  return (
    <div>EditBooks</div>
  )
}

export default EditBooks