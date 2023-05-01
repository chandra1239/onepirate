import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";

const App = () => (
  <div className="App">
    <Home />
  </div>
);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
