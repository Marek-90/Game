import React, { useState, useEffect } from "react";

const Timer = () => {
  const [sec, setSec] = useState([0]);
  const [min, setMin] = useState([0]);

  useEffect(() => {
    const time = setInterval(() => {
      if (sec <= 59) {
        setSec((prevState) => [prevState[0] + 1]);
      }
      if (sec === 60) {
        clearInterval(time);
      }
    }, 1000);
  });
  return (
    <div>
      <h2>
        {min}:{sec}
      </h2>
    </div>
  );
};

export default Timer;
