import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Grid() {
  return "Grid";
}

function Main() {
  const [generation, setGeneration] = useState(0);

  return (
    <div>
      <h1>Game of Life</h1>
      <Grid />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
