import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import Header from "./header";
import Main from "./main";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
