import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

const TaskList = ({todo, setTodoItem, buttonFilter}) => {

  const handleSetEdit = (id) => {
    setTodoItem((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, edit: true }
        }
        return item
      })
    )

  }
  const handleDelete = (id) => {
    setTodoItem((prevState) => prevState.filter((post) => post.id !== id))
  }
  const handleChangeStatus =(id)=>{
    setTodoItem((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status }
        }
        return item
      })
    )
  }
  return (
    <ul className="todo-list">
      {
        todo?.map(item => {
          return (
            <Task
              key={item.id}
              {...item}
              onDelete = {handleDelete}
              onStatus = {handleChangeStatus}
              todo = {todo}
              setTodoItem = {setTodoItem}
              onSetEdit = {handleSetEdit}
              buttonFilter={buttonFilter}
            />
          )
        })
      }
    </ul>
  )
}
TaskList.defaultProps = {
  todo: [],
  buttonFilter: 'all',
  setTodoItem: () => {}
}
TaskList.propTypes = {
  todo: PropTypes.array,
  setTodoItem: PropTypes.func,
  buttonFilter: PropTypes.string
}
export default TaskList
