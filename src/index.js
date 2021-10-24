import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import Heading from "./Heading";
import TopArtist from "./TopArtist";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Heading />
    <h1>Top Music this week</h1>
    <TopArtist />
    <h1>Favourite Artists</h1>
    <TopArtist />
    <App />
  </StrictMode>,
  rootElement
);
