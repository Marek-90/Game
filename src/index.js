import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

import Header from "./start";

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
