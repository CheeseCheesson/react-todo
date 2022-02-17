import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './task.css'
import TextAria from '../text-aria'

const Task = ({ id, post, onSavePost, onDelete, onStatus, isStatus, timer }) => {
  //^ update
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  const handleUpdatePost = (id, post) => {
    setEditId(id)
    setEditValue(post)
  }
  const handleEditPost = ({ target }) => {
    setEditValue(target.value)
  }
  return (
    <>
      {editId === id ? (
        <li className="editing">
          <form onSubmit={(event) => onSavePost(event, id, editValue, setEditId)}>
            <TextAria  type="text" classValue="edit" value={editValue} onChange={handleEditPost} />
          </form>
        </li>
      ) : (
        <li className={isStatus ? 'completed' : ''}>
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked={isStatus} onClick={() => onStatus(id)} />
            <label>
              <span className="description">{post}</span>
              <span className="created">created: {timer} ego </span>
            </label>
            <button className="icon icon-edit" disabled={isStatus} onClick={() => handleUpdatePost(id, post)}></button>
            <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
          </div>
        </li>
      )}
    </>
  )
}
Task.propTypes = {
  id: PropTypes.string,
  post: PropTypes.string,
  editId: PropTypes.string,
  isStatus: PropTypes.bool,
  valueInput: PropTypes.string,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onChange: PropTypes.func,
  onSavePost: PropTypes.func,
  onStatus: PropTypes.func,
}
export default Task
