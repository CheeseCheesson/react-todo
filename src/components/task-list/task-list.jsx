import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = (props) => {
  return (
    <ul className="todo-list">
      <Task {...props} />
    </ul>
  );
};

export default TaskList;
