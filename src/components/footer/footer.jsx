import React from "react";
import TaskFilter from "../tasks-filter";
import "./footer.css";
const Footer = ({ countLeft, onChangeFilterButton, buttonValue }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{countLeft} items left</span>
      <TaskFilter
        buttonValue={buttonValue}
        onChangeFilterButton={onChangeFilterButton}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
