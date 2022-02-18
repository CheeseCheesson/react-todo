import React from 'react'
import PropTypes from 'prop-types'
import './task-filter.css'
const TaskFilter = ({onButtonState, buttonFilter}) => {
  const buttons = [
    {name: 'All', state: 'all', check: true},
    {name: 'Active', state: 'active', check: false},
    {name: 'Completed', state: 'completed', check: false},
  ]

  return (
    <ul className="filters">
      {
        buttons.map((item) => (              
          <li key={item.name}>
            <button className={item.state ===buttonFilter  ? 'selected' : ''} onClick = {() => onButtonState(item.state)}> 
              {item.name}
            </button>
          </li>
        ))}
    </ul>
  )
}
TaskFilter.defaultProps = {
  buttonFilter: 'all',
  onFilterChange: () => {},
}
TaskFilter.propTypes = {
  onButtonState:PropTypes.func,
  buttonFilter: PropTypes.string
}
export default TaskFilter
