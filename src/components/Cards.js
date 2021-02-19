import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my projects below!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/store.png"
              text="Ecommerce website built with MERN and redux"
              label="Kipper"
              path="https://github.com/seanmena/Kipper"
            />

            <CardItem
              src="images/colorize.png"
              text="App that finds color pallete from image"
              label="Colorize"
              path="https://github.com/maxonemillion/Colorize"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/pro3.png"
              text="App that tracks your workouts"
              label="Workout-tracker"
              path="https://github.com/seanmena/fitnes-tracker"
            />
            <CardItem
              src="images/LandingPage.png"
              text="App that generates media based off emotion"
              label="EMG"
              path="https://github.com/MizTangerine/Emotional_Media_Generator"
            />
            <CardItem
              src="images/Screen Shot 2021-01-11 at 7.21.51 PM (2).png"
              text="App to organize employees and their roles"
              label="Emp-Tracker"
              path="https://github.com/seanmena/EmployeeManager"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
