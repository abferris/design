import React from "react";

function Cell(props) {
  return (
    <>
      {props.type === "header" ? (
        <div id="headerCell">{props.item}) }</div>
      ) : (
        <div id="contentCell">{props.item}</div>
      )}
    </>
  );
}

export default Cell;
