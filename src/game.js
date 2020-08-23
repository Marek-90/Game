import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./scss/main.scss";
import Card from "./card";

const Game = () => {
  const [current, setCurrent] = useState([]);
  const [score, setScore] = useState([0]);
  const [idArr, setIdArr] = useState([]);
  const [cardCont, setCardCont] = useState(
    shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9])
  );

  const clickOn = (secret, id, e) => {
    if (current.length < 2) {
      setCurrent((prevState) => [...prevState, secret]);
      setIdArr((prevState) => [...prevState, id]);

      e.target.classList.add("newClass");
    }
  };

  const numArr1 = idArr[1] - 1;

  useEffect(() => {
    const t = setTimeout(() => {
      if (current.length === 2) {
        if (idArr[0] !== idArr[1]) {
          if (current[0] === current[1]) {
            setScore((prevState) => [prevState[0] + 1]);
            if (idArr[0] > idArr[1]) {
              cardCont.splice(idArr[0], 1);
              cardCont.splice(idArr[1], 1);
            } else if (idArr[0] < idArr[1]) {
              cardCont.splice(idArr[0], 1);
              cardCont.splice(numArr1, 1);
            }
          }
        } else {
        }
        setCurrent([]);
        setIdArr([]);
      }
    }, 1000);
  }, [current]);

  function shuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  if (score[0] === 9) {
    const WinnerPanel = () => {
      return (
        <div className="main__game-container ">
          <div className="winnerPanel">
            <p>Gratulacje Wygrałeś!</p>
            <p>Zdobyłeś {score} punktów!</p>
            <motion.button
              className="main__btn-decoration"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px rgb(255, 255,255)",
              }}
            >
              <Link to="/level">Graj dalej</Link>
            </motion.button>
            <motion.button
              className="main__btn-decoration"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 10px rgb(255, 255,255)",
              }}
            >
              <Link to="/">Menu</Link>
            </motion.button>
          </div>
        </div>
      );
    };
    return <WinnerPanel />;
  }
  const content = cardCont.map((el, i) => (
    <Card id={i} key={i} content={el} show={clickOn} idArr={idArr} />
  ));
  return (
    <div className="main__game-container">
      <div className="main__game-score">Twój wynik to: {score}</div>
      <div className="main__game">{content}</div>
    </div>
  );
};

export default Game;
