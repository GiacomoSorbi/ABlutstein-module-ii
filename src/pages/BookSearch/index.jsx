import React, { useState } from "react";
import "../../components/BookSearch/Books/books.css";
import { DataContext } from "../../components/BookSearch/context";
import Books from "../../components/BookSearch/Books/books";
import Search from "../../components/BookSearch/Search/searchBook";
import "./bookSearch.css";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <DataContext.Provider
        value={{ query, setQuery, data, setData, loading, setLoading }}
      >
        <div className="bookForm">
          <h4>What book will I read today?</h4>
          <Search />
          <Books />
        </div>
      </DataContext.Provider>

      <div class="bookContainer">
        <a
          id="pooh"
          className="bookBoxes"
          href="https://www.poohcorner.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../components/Images/pooh.jpg")} alt="pooh" />
        </a>
        <a
          id="Bing"
          href="https://books.google.co.uk/books?id=bzEUrgEACAAJ&dq=the+bib+big+bing+book&hl=en&sa=X&ved=2ahUKEwi8ga_IhsLqAhVpVBUIHfa4A7AQ6AEwAHoECAAQAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../components/Images/Bing.jpg")} alt="Bing" />
        </a>
        <a
          id="pooh"
          href="https://books.google.co.uk/books/about/Zog.html?id=4Y08DgAAQBAJ&redir_esc=y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../components/Images/zog.jpg")} alt="Zog" />
        </a>
      </div>
    </div>
  );
}

export default BookSearch;
