import React from "react";
import { render } from "react-dom";

import App from "./components/App";

const rootElement = document.getElementById("root");

const THEMES = [
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
    <App themes={THEMES} />,
    rootElement
);
