import React, { useState, useEffect } from "react";

const Timer = () => {
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

  return (
    <div>
      {min} min {sec} sec
    </div>
  );
};

export default Timer;
