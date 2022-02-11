import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({
  posts,
  onDelete,
  onUpdate,
  editId,
  onChange,
  valueInput,
  onSavePost,
  onStatus,
}) => {
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
              onStatus={onStatus}
              isStatus={item.status}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default TaskList;
