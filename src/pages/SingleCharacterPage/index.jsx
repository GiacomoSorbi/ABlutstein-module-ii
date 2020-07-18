import React from "react";
import { NavLink } from "react-router-dom";
import "./singleCharacterPage.css";
import { characters } from "../../constants";

const SingleCharacterPage = ({ match }) => {
  const characterId = +match.params.id;
  const characterPicture = characters.find(elem => elem.id === characterId)
    .picture;
  const characterDescription = characters.find(elem => elem.id === characterId)
    .description;

  //returns the character picture from the array of objects and the character picture plus descritpion from the array objects.
  return (
    <div>
      <p className="profileHead">Profile for {characterPicture}</p>
      <p className="profileId">
        {characterPicture} My name is {characterDescription}
        <NavLink className="goBack" to="/characters">
          Go back to the top
        </NavLink>
      </p>
    </div>
  );
};

export default SingleCharacterPage;
