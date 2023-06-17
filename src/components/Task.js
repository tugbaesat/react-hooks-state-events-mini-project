import React from "react";

function Task({ category, text, onClickDelete }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onClickDelete(text) }>X</button>
    </div>
  );
}

export default Task;
