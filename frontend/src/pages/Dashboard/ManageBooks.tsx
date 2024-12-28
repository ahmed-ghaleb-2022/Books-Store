import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { Book } from "../../Types";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data.data));
  }, [allBooks]);


  const handleDelete = (id: string) => {
    fetch(`http://127.0.0.1:5000/books/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingBooks = allBooks.filter(
            (book) => book._id !== id
          );
          setAllBooks(remainingBooks);
        }
      });
    }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      <div className="overflow-x-auto">
        <Table className="lg:w-[1180px]">
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {allBooks.map((book, index) => (
              <Table.Row
                key={book._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>${book.price}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-semibold mr-5 text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(book._id)} className="font-semibold text-white px-4 py-1 bg-red-600 hover:bg-red-800 dark:bg-red-500 rounded-sm">Delete</button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
