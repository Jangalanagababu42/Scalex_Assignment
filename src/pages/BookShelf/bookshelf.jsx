import React, { useContext } from "react";
import "./bookShelf.css";
import { BookContext } from "../../contexts/bookContext";
import BookCard from "../../components/BookCard/bookCard";

const BookShelf = () => {
  const { books } = useContext(BookContext);
  console.log(books, "bookshelfpage");

  return (
    <div className="bookshelf-main">
      <h1>Pustak</h1>
      <h3>The Ocean of Knowlegde</h3>
      <hr />
      <ul>
        {books?.length === 0 ? (
          <h2>No books present in shelf.</h2>
        ) : (
          books?.map((book) => (
            <BookCard key={book?.work?.cover_id} book={book} />
          ))
        )}
      </ul>
    </div>
  );
};

export default BookShelf;
