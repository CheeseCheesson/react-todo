import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../tasks-filter'
import './footer.css'

const Footer = ({ todoItem, setTodoItem, onButtonState, buttonFilter}) => {

  const handleClear = () => {
    setTodoItem([])
  }
  return (
    <footer className="footer">
      <span className="todo-count">{
        [...todoItem].filter(item => item.status).length
      } items left</span>
      <TaskFilter onButtonState={onButtonState} buttonFilter={buttonFilter}/>
      <button className="clear-completed" onClick={handleClear}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.defaultProps = {
  todoItem: [],
  buttonFilter: 'all',
  setTodoItem: () => {},
  onButtonState: () => {}
}
Footer.propTypes = {
  todoItem: PropTypes.array,
  setTodoItem: PropTypes.func,
  onButtonState: PropTypes.func,
  buttonFilter: PropTypes.string,
}
export default Footer
