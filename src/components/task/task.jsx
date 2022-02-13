import React from "react";
import "./task.css";
import Result from "../utils/timer";
import PropTypes from "prop-types";
import TextAria from "../text-aria";

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
}) => {
  return (
    <>
      {editId === id ? (
        <li className="editing">
          <form onSubmit={(event) => onSavePost(event, id)}>
            <TextAria type="text" classValue='edit' onChange={onChange}/>
          </form>
        </li>
      ) : (
        <li className={isStatus ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={isStatus}
              onClick={() => onStatus(id)}
            />
            <label>
              <span className="description">{post}</span>
              <span className="created">created: {Result} </span>
            </label>
            <button
              className="icon icon-edit"
              disabled={isStatus}
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
Task.propTypes = {
  id: PropTypes.string,
  post: PropTypes.string,
  editId: PropTypes.string,
  isStatus: PropTypes.bool,
  valueInput: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onChange: PropTypes.func,
  onSavePost: PropTypes.func,
  onStatus: PropTypes.func,
};
export default Task;
