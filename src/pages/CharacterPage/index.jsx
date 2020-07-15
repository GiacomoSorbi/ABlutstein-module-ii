import React from "react";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { characters } from "../../constants";
import SingleCharacterPage from "../SingleCharacterPage";

const CharacterPage = () => (
  <>
    <div className="characterContainer">
      <h4>Meet Babbit and friends</h4>

      {characters.map(character => (
        <NavLink
          key={character.id}
          className="character-link"
          to={`/characters/${character.id}`}
        >
          {character.picture}
        </NavLink>
      ))}
      <Route
        path="/characters"
        exact
        render={() => (
          <div>Click on an image to read more about Babbit and friends</div>
        )}
      />
      <Route path="/characters/:id" component={SingleCharacterPage} />
    </div>
  </>
);

export default CharacterPage;
