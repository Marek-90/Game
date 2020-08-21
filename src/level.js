import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./scss/main.scss";

const Level = () => {
  return (
    <motion.div className="main">
      <ul className="main__container">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <motion.button
            className="main__btn-decoration"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px rgb(255, 255,255)",
            }}
          >
            <Link to="/gameEasy">EASY</Link>
          </motion.button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <motion.button
            className="main__btn-decoration"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px rgb(255, 255,255)",
            }}
          >
            <Link to="/game">MEDIUM</Link>
          </motion.button>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
        >
          <motion.button
            className="main__btn-decoration"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px rgb(255, 255,255)",
            }}
          >
            <Link to="/gameHard">HARD</Link>
          </motion.button>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Level;
