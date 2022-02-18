import React from "react";
import Color from "./components/Color/Color";
import ColorPicker from "./components/ColorPicker";
import Grid from "./components/Grid";
import Stats from "./components/Stats";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ColorPicker />
      <Grid />
      <Stats />
    </div>
  );
}
