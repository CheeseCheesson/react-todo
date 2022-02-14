import React from "react"
import PropTypes from "prop-types"
const TaskFilter = ({ buttonValue, onChangeFilterButton }) => {
  return (
    <ul className="filters">
      {buttonValue &&
        buttonValue.map((item) => (
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
  )
}
TaskFilter.propTypes = {
  buttonValue: PropTypes.array,
  onChangeFilterButton: PropTypes.func,
}
export default TaskFilter
