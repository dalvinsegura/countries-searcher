import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CountryDetailed from "./components/countryDetailed/CountryDetailed";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:code" element={<CountryDetailed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
