import React from "react";

const TaskFilter = ({ buttonValue, onChangeFilterButton }) => {

  return (
    <ul className="filters">
      {buttonValue && buttonValue.map((item) => (
        <li key={item.id}>
          <button
            className={item.active ? "selected" : ""}
            onClick={() => onChangeFilterButton(item.name)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskFilter;
