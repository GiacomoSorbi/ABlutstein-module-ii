import React, { useContext } from "react";
import BookObject from "../BookObject/bookObject";
import { DataContext } from "../context";

import "./books.css";

function Books() {
  const { data } = useContext(DataContext);
  const books = data.items || [];

  if (data.kind && data.totalItems === 0) {
    return (
      <span className="holderText">
        Oh dear we couldn't find your book! don't give up, please try again.
      </span>
    );
  }

  return (
    <div className="books">
      <BookObject books={books} />
    </div>
  );
}

export default Books;
