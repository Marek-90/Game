import React, { useState, useEffect } from "react";
import Card from "./Card";
import WinnerPanel from "./WinnerPanel";
import "./scss/main.scss";

const GameEasy = () => {
  const [current, setCurrent] = useState([]);
  const [idArr, setIdArr] = useState([]);
  const [cardCont, setCardCont] = useState(
    shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6])
  );
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
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

    return () => clearInterval(time);
  }, []);

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

export default GameEasy;
