import React from "react";
import { render } from "react-dom";

import App from "./components/App";

const rootElement = document.getElementById("root");

const COLORS = [
  {
  	"theme": "red",
  	"title": "Cherry"
  }, {
  	"theme": "blue",
  	"title": "Beach"
  }, {
  	"theme": "green",
  	"title": "Base"
  }
]

render(
    <React.StrictMode>
        <App colors={COLORS} />
    </React.StrictMode>,
    rootElement
);
