import React from "react";
import defaultImage from "../../BookSearch/assets/defaultImage.png";

function BookObject({ books }) {
  const displayImageSrc = imageLinks => {
    return imageLinks ? imageLinks.smallThumbnail : defaultImage;
  };

  const displayAuthor = authors => {
    return authors
      ? authors
          .slice(0, 3)
          .join(", ")
          .slice(0, 60)
      : "N/A";
  };

  const displayTitle = title => {
    return title ? title.slice(0, 60) : "N/A";
  };

  return books.map(book => {
    const {
      id,
      volumeInfo: { authors, title, imageLinks, infoLink }
    } = book;

    return (
      <div className="book" key={id}>
        <img src={displayImageSrc(imageLinks)} alt={title} />
        <div className="book__author">By: {displayAuthor(authors)}</div>
        <div className="book__title">{displayTitle(title)}</div>
        <a
          href={infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="book__btn"
        >
          Let's go and find out more...
        </a>
      </div>
    );
  });
}
export default BookObject;
