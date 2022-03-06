import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/index.css";
import Menu from "./Menu";
import Home from "./Home";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
