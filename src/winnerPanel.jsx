import React from "react";
import Form from "./Form";

const WinnerPanel = ({ min, sec }) => {
  let score;

  if (sec < 30 && min === 0) {
    score = 100000 + (1000 - sec * 0.1);
  } else if (sec <= 59 && min === 0) {
    score = 100000 + (500 - sec * 0.5);
  } else if (min > 0) {
    score = 100000 - (min + sec) * sec;
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
