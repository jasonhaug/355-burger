import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BurgerSite from "./components/BurgerSite";
import FullMenu from "./components/FullMenu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BurgerSite />} />
        <Route path="/menu" element={<FullMenu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
