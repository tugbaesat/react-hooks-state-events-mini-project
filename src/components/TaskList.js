import React from "react";
import Task from "./Task";

function TaskList({ tasks, onClickDelete }) {
  

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task key={task.text} text={task.text} category={task.category} onClickDelete={onClickDelete}/>
        );
      })}
    </div>
  );
}

export default TaskList;
