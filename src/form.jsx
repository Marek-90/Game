import React, { useState } from "react";
import { motion } from "framer-motion";
import { fireBase } from "./config/config_firebase";

const Form = ({ score }) => {
  const [input, setInput] = useState("");
  const db = fireBase.firestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      db.collection("Scores").add({ Name: input, Score: score });
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form__style">
      <input
        type="text"
        placeholder="Your name"
        className="form__tyle-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <motion.button
        type="submit"
        className="main__btn-decoration"
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 10px rgb(255, 255,255)",
        }}
      >
        Wyślij
      </motion.button>
    </form>
  );
};
export default Form;
