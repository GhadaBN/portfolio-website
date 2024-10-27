import React from 'react'
import "./Board01.css"
const Board01 = ({board01}) => {
  return (
    <div className="boards-wrapper">
      {board01?.map((board, index) => (
        <div key={index} className="">
          <img src={board} className="board" />
        </div>
      ))}
    </div>
  )
}

export default Board01
