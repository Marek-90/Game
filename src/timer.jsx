import React, { useState, useEffect } from "react";

const Timer = () => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      setSec((prevState) => prevState + 1);
    }, 1000);
    return () => clearInterval(time);
  });

  return <div>{sec}</div>;
};

export default Timer;
