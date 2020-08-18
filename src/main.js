import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import { motion } from "framer-motion";

const Main = () => {
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
            START
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
            STATISTICS
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
            BLOG
          </motion.button>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default Main;
