import React from "react";

function Task({text, onDelete, category}) {

  return (
    <div className="task" id={text}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
