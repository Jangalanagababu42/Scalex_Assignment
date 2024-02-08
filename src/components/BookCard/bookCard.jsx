import React, { useContext } from "react";
import { BookContext } from "../../contexts/bookContext";
import "./bookCard.css";

const BookCard = ({ book, index }) => {
  const {
    cover_id,
    title,
    author_names,
    isRead,

    first_publish_year,
  } = book;
  const { toggleReadStatus } = useContext(BookContext);

  return (
    <li key={index} className="bookcard">
      <div>
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`}
          alt="book-pic"
        />
        <p>
          <b>{title}</b>
        </p>

        <p>
          {author_names.length < 2 ? (
            author_names.map((name) => <p>{name}</p>)
          ) : (
            <p>
              {author_names[0]}
              {author_names[1]}& more..
            </p>
          )}
        </p>
        <p>
          <b>{first_publish_year}</b>
        </p>
      </div>
      <div>
        <p className="btn" onClick={() => toggleReadStatus(cover_id)}>
          {isRead ? (
            <p className="read">Already Read</p>
          ) : (
            <p className="unread">Unread</p>
          )}
        </p>
      </div>
    </li>
  );
};

export default BookCard;
