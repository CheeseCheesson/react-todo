import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

const TaskList = ({
  posts,
  onDelete,
  onSavePost,
  onStatus,
  filtred,
  timer,
}) => {


  return (
    <ul className="todo-list">
      {
        (filtred || posts).map(item => {
          return (
            <Task
              key={item.id}
              id={item.id}
              post={item.post}
              isStatus={item.status}
              onDelete={onDelete}
              onSavePost={onSavePost}
              onStatus={onStatus}
              timer={timer}
            />
          )
        })
      }
    </ul>
  )
}
Task.propTypes = {
  posts: PropTypes.array,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  editId: PropTypes.string,
  onChange: PropTypes.func,
  valueInput: PropTypes.string,
  onSavePost: PropTypes.func,
  onStatus: PropTypes.func,
  filtred: PropTypes.array,
  
}
export default TaskList
