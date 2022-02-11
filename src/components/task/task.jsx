import React from "react";
import "./task.css";

const Task = ({
  id,
  post,
  onDelete,
  onUpdate,
  editId,
  onChange,
  valueInput,
  onSavePost,
  onStatus,
  isStatus,
  statusId
}) => {
console.log("isStatus",isStatus);


  return (
    <>
      {editId === id ? (
        <li className="editing">
          <form onSubmit={(event)=>onSavePost(event, id)}>
            <input
              type="text"
              className="edit"
              value={valueInput}
              onChange={onChange}
            />
          </form>
        </li>
      ) : (
        <li className={statusId === id &&  isStatus ? "completed" : ""}>
          <div className='view'>
            <input className="toggle" type="checkbox" onClick={() => onStatus(id)} />
            <label>
              <span className="description">{post}</span>
              <span className="created">created 5 minutes ago</span>
            </label>
            <button
              className="icon icon-edit"
              onClick={() => onUpdate(id, post)}
            ></button>
            <button
              className="icon icon-destroy"
              onClick={() => onDelete(id)}
            ></button>
          </div>
        </li>
      )}
    </>
  );
};

export default Task;
