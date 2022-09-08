import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import "./assets/index.css";
import Menu from "./Menu";
import Home from "./Home";

const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});

const App = () => {
  const scrollFn = () => {
    lenis.raf();
    requestAnimationFrame(scrollFn);
  };
  requestAnimationFrame(scrollFn);

  return (
    <BrowserRouter>
      <React.Fragment>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
