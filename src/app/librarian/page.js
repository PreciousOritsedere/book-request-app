"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import BookCard from "../components/Bookcard";

const Librarian = () => {
  const [requestedBooks, setRequestedBooks] = useState([]);

  useEffect(() => {
    // Retrieve the requested books from local storage on initial render
    const savedBooks = localStorage.getItem("requestedBooks");
    if (savedBooks) {
      setRequestedBooks(JSON.parse(savedBooks));
    }
  }, []);

  const handleAcceptBook = (index) => {
    const bookToAccept = requestedBooks[index];
    const updatedBooks = [...requestedBooks];
    updatedBooks.splice(index, 1);
    setRequestedBooks(updatedBooks);
    localStorage.setItem("requestedBooks", JSON.stringify(updatedBooks));

    const acceptedBooks =
      JSON.parse(localStorage.getItem("acceptedBooks")) || [];
    acceptedBooks.push(bookToAccept);
    localStorage.setItem("acceptedBooks", JSON.stringify(acceptedBooks));

    toast.success("Book request accepted!");
  };

  const handleDeclineBook = (index) => {
    const updatedBooks = [...requestedBooks];
    updatedBooks.splice(index, 1);
    setRequestedBooks(updatedBooks);
    localStorage.setItem("requestedBooks", JSON.stringify(updatedBooks));
    toast.error("Book request declined!");
  };

  if (requestedBooks.length === 0) {
    return <p>No requested books.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Requested Books</h1>
      <div className="grid grid-cols-1  md:grid-cols-3  gap-6">
      {requestedBooks.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onAccept={() => handleAcceptBook(index)}
            onDecline={() => handleDeclineBook(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Librarian;
