"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import BookCard from "../components/Bookcard";

const Student = () => {
  const [acceptedBooks, setAcceptedBooks] = useState([]);

  useEffect(() => {
    // Retrieve the accepted books from local storage on initial render
    const savedBooks = localStorage.getItem("acceptedBooks");
    if (savedBooks) {
      setAcceptedBooks(JSON.parse(savedBooks));
    }
  }, []);

  if (acceptedBooks.length === 0) {
    return <p>No accepted books.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Accepted Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
      {acceptedBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Student;
