import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ posts, onDelete }) => {
  return (
    <ul className="todo-list">
      {posts.map((item) => {
        if (item.post) {
          return (
            <Task
              key={item.id}
              id={item.id}
              post={item.post}
              onDelete={onDelete}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default TaskList;
