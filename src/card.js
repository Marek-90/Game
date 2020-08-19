import React from "react";
import "./scss/main.scss";

const Card = ({ content, show, id }) => {
  return (
    <div id={id} className="mainGameCard" onClick={() => show(content, id)}>
      {content}
    </div>
  );
};
export default Card;
