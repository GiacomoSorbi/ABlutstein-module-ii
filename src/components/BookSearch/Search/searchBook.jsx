import React, { useContext, useState, useRef, useEffect } from "react";
import "./search.css";
import { DataContext } from "../context";

function Search() {
  const { query, setQuery, setData, setLoading } = useContext(DataContext);
  const [isEmpty, setIsEmpty] = useState(false);
  const inputText = useRef();

  useEffect(() => {
    inputText.current.focus();
  });

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKey);
    return () => document.removeEventListener("keydown", handleEnterKey);
  });

  const handleEnterKey = event => {
    if (event.key === "Enter") handleSubmit(event);
  };

  const handelClick = event => {
    event.preventDefault();
    setQuery("");
  };

  const handleChange = event => {
    const { value } = event.target;

    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!query.length) {
      setIsEmpty(true);
    } else {
      setLoading(true);
      setIsEmpty(false);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query} + "&maxResults=4`
      )
        .then(res => res.json())
        .then(data => {
          setLoading(false);
          setData(data);
        })
        .catch(err => {
          console.log(`Fetch api error: ${err}`);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <label>
        Book search
        <input
          className="SearchText"
          maxLength="50"
          onChange={handleChange}
          placeholder="Enter your book title or writer"
          ref={inputText}
          type="text"
          value={query}
        />
      </label>
      {query.length !== 0 && (
        <button onClick={handelClick} className="closeBtn">
          &times;
        </button>
      )}
      <input className="searchSubmit" type="submit" value="Search" />
      {isEmpty && (
        <div className="ErrorText">
          Error: OH NO something went wrong please try again
        </div>
      )}
    </form>
  );
}

export default Search;
