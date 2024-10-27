import React from "react";
import "./Board02.css";

const Board02 = ({ board02 }) => {
  return (
    <div className="boards-wrapper">
      {board02?.map((board, index) => (
        <div key={index} className="">
          <img src={board} className="board" />
        </div>
      ))}
    </div>
  );
};

export default Board02;
