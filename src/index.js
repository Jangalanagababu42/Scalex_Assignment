import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import BookProvider from "./contexts/bookContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <BookProvider>
        <App />
      </BookProvider>
    </Router>
  </React.StrictMode>
);
