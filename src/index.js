import React from "react";
import ReactDOM from "react-dom/client";
import "./style.scss";
import "./codeEditor/Front";
import Front from "./codeEditor/Front";
import Home from "./WithBootstrap/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Front />
    <Home />
  </React.StrictMode>
);
