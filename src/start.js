import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__back">
          <a href="#">
            <motion.h1
              initial={{ x: 6000 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
                duration: 1.5,
                stiffness: 60,
                type: "spring",
              }}
              className="header__title"
            >
              Game
            </motion.h1>
          </a>
        </div>
      </div>
      <div className="main">
        <p className="main__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          cupiditate error fuga quae alias velit consequatur facere mollitia ea
          itaque.
        </p>
      </div>
    </>
  );
};

export default Header;
