import React from 'react'
import TaskFilter from '../tasks-filter'
import './footer.css'
import PropTypes from 'prop-types'
const Footer = ({ countLeft, onChangeFilterButton, buttonValue, onClear }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{countLeft} items left</span>
      <TaskFilter buttonValue={buttonValue} onChangeFilterButton={onChangeFilterButton} />
      <button className="clear-completed" onClick={onClear}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.propTypes = {
  countLeft: PropTypes.number,
  onChangeFilterButton: PropTypes.func,
  buttonValue: PropTypes.array,
  onClear: PropTypes.func,
}
export default Footer
