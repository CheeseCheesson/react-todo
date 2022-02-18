import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import './task.css'

const Task = ({ id, post, status, edit, todo, setTodoItem, onDelete, onSetEdit, onStatus, buttonFilter}) => {
  const [date, setTime] = useState(new Date())
  const timer = formatDistanceToNow(date, { includeSeconds: true })
  const getTime = () => {
    setTime(date)
  }
  useEffect(()=>{
    const idTime = setInterval(()=> getTime(), 1000)
    return () => clearInterval(idTime)
  } )
  const [editValue, setEditValue] = useState(post)
  const handleChange = ({target}) => {
    setEditValue(target.value)
  }
  const  handleSaveEdit = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if(editValue.trim()){
        const elInx = todo.findIndex((indx) => indx.id === id)
        const newTodos = [...todo]
        newTodos[elInx].post = editValue
        newTodos[elInx].edit = false
        setTodoItem(newTodos)
      }
    } else if(event.key === 'Escape'|| event.key === 'Esc') {
      setTodoItem((prevState) =>
        prevState.map((item) => {
          return {...item, edit: false}
        })
      )
    }
  }
  let classNames
  if (!status) {
    classNames = 'completed' 
    if (buttonFilter === 'active') {
      classNames += ' hidden'
    } else {
      classNames = 'completed'
    }
  };
  if (buttonFilter === 'completed' && classNames !== 'completed') {
    classNames = 'hidden'
  };
  if (edit) {
    classNames = 'editing'
  };
  return (
    <li className= {classNames}>
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={!status} onClick={(()=> onStatus(id))}/>
        <label>
          <span className="description">{post}</span>
          <span className="created">created: {timer} ago</span>
        </label>
        <button className="icon icon-edit" onClick={() => onSetEdit(id)}></button>
        <button className="icon icon-destroy" onClick={()=>onDelete(id)} ></button>
      </div>
      {edit ? <form onKeyDown={handleSaveEdit}><input type="text" className="edit" required value={editValue} onChange={handleChange}/></form> : ''}
    </li>
  )
}
Task.defaultProps = {
  id: '',
  post: '',
  status: false,
  edit: false,
  todo:[],
  buttonFilter: 'all',
  setTodoItem: ()=>{},
  onDelete: () => {},
  onSetEdit: () => {},
  onStatus: () => {},
}
Task.propTypes = {
  id: PropTypes.string,
  post: PropTypes.string,
  status: PropTypes.bool,
  edit: PropTypes.bool,
  todo: PropTypes.array,
  setTodoItem: PropTypes.func,
  onDelete: PropTypes.func,
  onSetEdit: PropTypes.func,
  onStatus: PropTypes.func,
  buttonFilter: PropTypes.string,
}
export default Task