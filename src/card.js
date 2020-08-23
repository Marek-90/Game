import React from "react";
import "./scss/main.scss";

const Card = ({ content, show, id, idArr }) => {
  const newC = idArr.includes(id, 0) ? "mainGameCard newClass" : "mainGameCard";

  return (
    <div id={id} className={newC} onClick={(e) => show(content, id, e)}>
      {content}
    </div>
  );
};
export default Card;
