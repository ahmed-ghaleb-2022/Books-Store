import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Book } from "../../Types";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {

  const bookCategories = [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Fantasy",
    "Historical",
    "Horror",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "Western",
  ];
  
  const [book, setBook] = useState<Book>();
  const [selectedCategories, setSelectedCategories] = useState<string>(bookCategories[0]);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data)
        setSelectedCategories(data.category)
      } );
  }, []);

  

  

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategories(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    //const formElement = event.currentTarget;
    const formData = new FormData(event.currentTarget);

    const bookTitle = formData.get("bookTitle") as string;
    const authorName = formData.get("authorName") as string;
    const category = formData.get("bookCategory") as string;
    const bookDescription = formData.get("bookDescription") as string;
    const imageURL = formData.get("imageURL") as string;
    const bookPDFURL = formData.get("bookPDFURL") as string;
    const price = parseFloat(formData.get("bookPrice") as string).toFixed(2);

    const bookData = {
      bookTitle,
      authorName,
      category,
      bookDescription,
      imageURL,
      bookPDFURL,
      price,
    };

    fetch(`http://127.0.0.1:5000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate("/admin/dashboard/manage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit this Book</h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* 1st row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              defaultValue={book?.bookTitle}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
              defaultValue={book?.authorName}
            />
          </div>
        </div>

        {/* 2nd row  */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image Url" />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="The Image Url..."
              required
              defaultValue={book?.imageURL}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookCategory" value="Book Category" />
            </div>
            <Select
              id="bookCategory"
              name="bookCategory"
              value={selectedCategories}
              onChange={handleCategoryChange}
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* 3rd row  */}
        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" value="Book Description" />
            </div>
            <Textarea
              id="bookDescription"
              name="bookDescription"
              placeholder="Write your book description..."
              required
              rows={4}
              defaultValue={book?.bookDescription}
            />
          </div>
        </div>

        {/* 4th row  */}

        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookPrice" value="Price" />
            </div>
            <TextInput
              id="bookPrice"
              name="bookPrice"
              type="number"
              placeholder="10.00"
              required
            />
          </div>
        </div>



        {/* 5th row  */}

        <div className="flex gap-8">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="bookPDFURL" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPDFURL"
              name="bookPDFURL"
              type="text"
              placeholder="Book PDF URL"
              required
              defaultValue={book?.bookPDFURL}
            />
          </div>
        </div>

        
        <Button type="submit" className="mt-5">
          Update the Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;




