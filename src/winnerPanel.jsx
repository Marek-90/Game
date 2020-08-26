import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Form from "./form";

const WinnerPanel = ({ min, sec }) => {
  let score;

  if (sec < 30 && min === 0) {
    score = 1000 + (1000 - sec * 10);
  } else if (sec <= 59 && min === 0) {
    score = 1000 + (500 - sec * 15);
  } else if (min > 0) {
    score = 1000 - (min + sec) * sec;
  }

  return (
    <div className="main__game-container ">
      <div className="winnerPanel">
        <p>Gratulacje Wygrałeś!</p>
        <p>Zdobyłeś {score} punktów!</p>
        <Form score={score} />
      </div>
    </div>
  );
};

export default WinnerPanel;
