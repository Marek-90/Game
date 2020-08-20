import React from "react";
import "./scss/main.scss";
import classNames from "classnames";

const Card = ({ content, show, id, active, disabled }) => {
  return (
    <div
      id={id}
      className={classNames("mainGameCard", {
        active: active,
        // disabled: disabled,
      })}
      onClick={() => show(content, id)}
    >
      {content}
    </div>
  );
};
export default Card;
