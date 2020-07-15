import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Weather from "../../components/Weather/Weather.forecast";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/things-to-do" exact>
          <img
            src={require("../../components/Images/toDoIcon.PNG")}
            alt="toDo"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/painting" exact className="paint">
          <img
            className="paint"
            src={require("../../components/Images/paintIcon.PNG")}
            alt="paint"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/book" exact>
          <img
            src={require("../../components/Images/bookSearchIcon.PNG")}
            alt="meet Babbit"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/characters" exact>
          <img
            src={require("../../components/Images/meetIcon.PNG")}
            alt="meet Babbit"
          />
        </NavLink>
      </li>
      <li>
        <NavLink to="/" exact>
          <img
            src={require("../../components/Images/homePageIcon.png")}
            alt="toDo"
          />
        </NavLink>
      </li>
    </ul>
    <main>
      <Weather />
    </main>
  </nav>
);

export default NavBar;
