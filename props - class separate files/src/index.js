import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Car from "./components/Car.js";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import Footer from "./components/Footer";
import Card from "./components/Card";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Card theObj={{ name: "oi", age: 1, sex: "dd" }} />
  </div>,
  rootElement
);
