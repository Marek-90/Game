import React from "react";
import "./scss/main.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header__back">
        <Link to="/">
          <h1 className="header__title">Game</h1>
        </Link>
      </div>
    </div>
  );
};
export default Header;
