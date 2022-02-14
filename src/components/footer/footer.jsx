import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../tasks-filter'
import './footer.css'

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
