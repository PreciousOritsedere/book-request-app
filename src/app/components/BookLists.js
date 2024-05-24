"use client"
import { useState } from "react";
import books from "../mockdata/books";
import Image from "next/image";
import { toast } from "react-toastify";

const BookList = () => {
  const [requestedBooks, setRequestedBooks] = useState(() => {
    // Retrieve the requested books from local storage on initial render
    if (typeof window !== "undefined") {
      const savedBooks = localStorage.getItem("requestedBooks");
      return savedBooks ? JSON.parse(savedBooks) : [];
    }
    return [];
  });

  const handleRequestBook = (book) => {
    const updatedRequestedBooks = [...requestedBooks, book];
    setRequestedBooks(updatedRequestedBooks);
    localStorage.setItem("requestedBooks", JSON.stringify(updatedRequestedBooks));
    toast.success(`Request for ${book.title} sent!`);
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-3  gap-6 p-4">
      {books.map((book, index) => (
        <div
          key={index}
          className="min-w-[250px] w-full h-auto border rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 cursor-pointer"
        >
          <div className="w-full h-48 relative overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              className="object-cover w-full h-full rounded-t-lg"
              layout="fill"
            />
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
            <h2 className="text-xl font-bold mb-1 text-gray-900">{book.title}</h2>
            <p className="text-gray-700 mb-2 italic">{book.author}</p>
            <p className="text-gray-600 text-left text-sm">{book.details}</p>
            <button
              className="bg-blue-500 text-white p-2 rounded mt-2"
              onClick={() => handleRequestBook(book)}
            >
              Request Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
