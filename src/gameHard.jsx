import React, { useState, useEffect } from "react";
import Card from "./card";
import WinnerPanel from "./winnerPanel";
import "./scss/main.scss";

const GameHard = () => {
  const [current, setCurrent] = useState([]);
  const [idArr, setIdArr] = useState([]);
  const [cardCont, setCardCont] = useState(
    shuffle([
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
    ])
  );
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [timeSec, setTimeSec] = useState();

  useEffect(() => {
    if (sec === 60) {
      setMin((prevState) => prevState + 1);
      setSec(0);
    }
  }, [sec]);

  useEffect(() => {
    const time = setInterval(() => {
      setSec((prevState) => prevState + 1);
    }, 1000);

    setTimeSec(time);

    return () => clearInterval(time);
  }, []);

  if (cardCont.length === 0) {
    clearInterval(timeSec);
  }

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
            if (idArr[0] > idArr[1]) {
              cardCont.splice(idArr[0], 1);
              cardCont.splice(idArr[1], 1);
            } else if (idArr[0] < idArr[1]) {
              cardCont.splice(idArr[0], 1);
              cardCont.splice(numArr1, 1);
            }
          }
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
  if (cardCont.length === 0) {
    return <WinnerPanel min={min} sec={sec} />;
  }
  const content = cardCont.map((el, i) => (
    <Card id={i} key={i} content={el} show={clickOn} idArr={idArr} />
  ));
  return (
    <div className="main__game-container">
      <div className="main__game-time">
        Czas:
        <div>
          {min} min {sec} sec
        </div>
      </div>
      <div className="main__game">{content}</div>
    </div>
  );
};

export default GameHard;
