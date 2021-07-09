import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
  console.log("LOAD ENV");
  require("dotenv").config();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
