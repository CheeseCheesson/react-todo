import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ posts, onDelete, onUpdate, editId, onChange, valueInput, onSavePost }) => {
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
              onUpdate={onUpdate}
              onChange={onChange}
              onSavePost={onSavePost}
              editId={editId}
              valueInput={valueInput}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default TaskList;
