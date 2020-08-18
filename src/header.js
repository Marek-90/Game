import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header">
      <div className="header__back">
        <a href="index.js">
          <h1 className="header__title">Game</h1>
        </a>
      </div>
    </div>
  );
};
export default Header;
