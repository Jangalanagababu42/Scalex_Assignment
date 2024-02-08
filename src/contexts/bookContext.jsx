import React, { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://openlibrary.org/people/mekBot/books/already-read.json`
      );
      const books = await response.json();
      const bookdetails = books.reading_log_entries;

      const filteredBooks = bookdetails.filter(
        (book) =>
          book.work.title !== null &&
          book.work.author_names !== null &&
          book.work.cover_id !== null &&
          book.work.first_publish_year !== null
      );
      const initialBookList = filteredBooks.map(({ work }) => ({
        ...work,
        isRead: Math.random() < 0.5,
      }));
      setBooks(initialBookList);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleReadStatus = (cover_id) => {
    const updatedBookList = books.map((book) => {
      if (book.cover_id === cover_id) {
        return {
          ...book,
          isRead: !book.isRead,
        };
      }
      return book;
    });

    setBooks(updatedBookList);
  };

  useEffect(() => {
    getBooks();
  }, []);
  if (loading) {
    return <p style={{ textalign: "center" }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ textalign: "center" }}>Error: {error.message}</p>;
  }

  return (
    <BookContext.Provider value={{ books, toggleReadStatus }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
