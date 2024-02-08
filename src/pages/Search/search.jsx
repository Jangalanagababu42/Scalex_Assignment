import React, { useContext, useState } from "react";
import "./search.css";
import { BookContext } from "../../contexts/bookContext";
import { useNavigate } from "react-router-dom";
import BookCard from "../../components/BookCard/bookCard";

const Search = () => {
  const { books } = useContext(BookContext);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const searchedBooks = books?.filter((book) =>
    book?.title.toLowerCase().includes(searchInput.trim().toLowerCase())
  );

  return (
    <div className="search-main">
      <h2>Search your favourite books by title</h2>
      <div>
        <i class="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
        <input
          placeholder="search a book"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {searchedBooks?.length > 0 ? (
        <ul className="books-container">
          {searchedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      ) : (
        <p>No book found!</p>
      )}
    </div>
  );
};

export default Search;
