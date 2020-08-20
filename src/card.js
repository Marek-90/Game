import React from "react";
import "./scss/main.scss";

const Card = ({ content, show, id, disabled }) => {
  return (
    <div id={id} className="mainGameCard" onClick={(e) => show(content, id, e)}>
      {content}
    </div>
  );
};
export default Card;
