import React, { useState } from "react";
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
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form-style"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Wyślij</button>
    </form>
  );
};
export default Form;
