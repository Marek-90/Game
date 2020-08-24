import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Rotate from "./rotate";
import "./scss/main.scss";

const App = () => {
  return (
    <Router>
      <Rotate />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
