import React from "react";
import Timer from "../TomodoreTimer/Timer";
import "./Home.css"

import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-cointainer">
      <h2>{props.name ? `Welcome to Pomodoro Timer App - ${props.name}` : ""}</h2>
      <Timer />
    </div>
  );
}

export default Home;
