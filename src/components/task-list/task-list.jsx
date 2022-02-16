/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'
import './task-list.css'

const TaskList = ({
  posts,
  onDelete,
  onUpdate,
  editId,
  onChange,
  valueInput,
  onSavePost,
  onStatus,
  filtred,
  timer,
  findButton,
}) => {
  if (filtred && findButton.name === 'Active') {
    return (
      <ul className="todo-list">
        {filtred.map((item) => {
          if (item.post && !item.status) {
            return (
              <Task
                key={item.id}
                id={item.id}
                post={item.post}
                isStatus={item.status}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onChange={onChange}
                onSavePost={onSavePost}
                editId={editId}
                valueInput={valueInput}
                onStatus={onStatus}
                timer={timer}
              />
            )
          }
        })}
      </ul>
    )
  }
  if (filtred && findButton.name === 'Completed') {
    return (
      <ul className="todo-list">
        {filtred.map((item) => {
          if (item.post && item.status) {
            return (
              <Task
                key={item.id}
                id={item.id}
                post={item.post}
                isStatus={item.status}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onChange={onChange}
                onSavePost={onSavePost}
                editId={editId}
                valueInput={valueInput}
                onStatus={onStatus}
                timer={timer}
              />
            )
          }
        })}
      </ul>
    )
  }
  if (posts) {
    return (
      <ul className="todo-list">
        {posts.map((item) => {
          if (item.post) {
            return (
              <Task
                key={item.id}
                id={item.id}
                post={item.post}
                isStatus={item.status}
                onDelete={onDelete}
                onUpdate={onUpdate}
                onChange={onChange}
                onSavePost={onSavePost}
                editId={editId}
                valueInput={valueInput}
                onStatus={onStatus}
                timer={timer}
              />
            )
          }
        })}
      </ul>
    )
  }
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
