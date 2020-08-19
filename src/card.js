import React from "react";

const Card = ({ content, show }) => {
  return (
    <div className="main__game-card {newClass}" onClick={() => show(content)}>
      {content}
    </div>
  );
};
export default Card;
