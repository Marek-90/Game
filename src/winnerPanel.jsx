import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Form from "./form";

const WinnerPanel = ({ score }) => {
  return (
    <div className="main__game-container ">
      <div className="winnerPanel">
        <p>Gratulacje Wygrałeś!</p>
        <p>Zdobyłeś {score} punktów!</p>
        <Form />
        <motion.button
          className="main__btn-decoration"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px rgb(255, 255,255)",
          }}
        >
          <Link to="/level">Graj dalej</Link>
        </motion.button>
        <motion.button
          className="main__btn-decoration"
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px rgb(255, 255,255)",
          }}
        >
          <Link to="/">Menu</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default WinnerPanel;
