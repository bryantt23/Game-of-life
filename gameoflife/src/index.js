import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Box(props) {
  const selectBox = () => {
    props.selectBox(props.row, props.col);
  };
  return <div className={props.boxClass} id={props.id} onClick={selectBox} />;
}

function Grid(props) {
  const width = props.cols * 14;
  let rowsArr = [];

  let boxClass = "";
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let boxId = i + "_" + j;
      boxClass = props.gridFull[i][j] ? "box on" : "box off";
      rowsArr.push(
        <Box
          boxClass={boxClass}
          key={boxId}
          boxId={boxId}
          row={i}
          col={j}
          selectBox={props.selectBox}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
      {props.gridFull}
      {props.rows} {props.cols}
    </div>
  );
}

function Main() {
  const speed = 100,
    rows = 30,
    cols = 50;

  const gridStart = () => {
    return Array(rows)
      .fill()
      .map(() => Array(cols).fill(false));
  };

  const [gridFull, setGridFull] = useState(gridStart());
  const [generation, setGeneration] = useState(0);
  let selectBox = "abc";

  return (
    <div>
      <h1>Game of Life</h1>
      <Grid gridFull={gridFull} rows={rows} cols={cols} selectBox={selectBox} />
      <h2>Generations: {generation}</h2>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
