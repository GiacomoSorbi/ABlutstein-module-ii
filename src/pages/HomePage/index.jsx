import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div class="MainContainer">
      <h1>Welcome to the world of Babbit and friends</h1>
      <div class="HomeContainer">
        <Link
          to="/painting"
          id="rabbit"
          className="HomeLinks"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../components/Images/rabbit_easel.png")}
            alt="rabbit"
          />
        </Link>
        <Link to="/things-to-do" id="owl" rel="noopener noreferrer">
          <img
            src={require("../../components/Images/owlBlackboard.png")}
            alt="Owl"
          />
        </Link>
        <Link to="/book" id="pooh" rel="noopener noreferrer">
          <img
            src={require("../../components/Images/owl_chair_final.png")}
            alt="Zog"
          />
        </Link>
      </div>

      <div class="boxes">
        <div class="box">
          <h3>Pooh Bear</h3>
          <p>
            "A friend is one of the best things you can have, and one of the
            best things you can be."
          </p>
        </div>

        <div class="box">
          <h3>Pooh Bear</h3>
          <p>
            "If ever there is a tomorrow when we're not together,There is
            something you must always remember, you are braver than you believe,
            stronger than you seem and smarter than you think. But the most
            important thing is, even if we are apart, I'll always be with you."
          </p>
        </div>

        <div class="box">
          <h3>Piglet</h3>
          <p>"When life throws you a rainy day, play in the puddles."</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
