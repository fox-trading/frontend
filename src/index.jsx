import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Helpers/ScrollToTop";

import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <App />
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
