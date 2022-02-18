import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './new-task-form.css'

const NewTaskForm = ({setTodoItem, todoItem}) => {
  const [value, setValue] = useState('')
  const handleChange = ({target}) => {
    setValue(target.value)
  }
  const  handleSave = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if(value.trim()){
        setTodoItem([
          ...todoItem,
          {
            id: Date.now().toString().slice(-6),
            post: value,
            status: true,
            edit: false
          },
        ])
      }
      
      setValue('')
    }

  }
  return (
    <form  className='new-todo-form'  onKeyPress={handleSave}>
      <input
        onChange={handleChange}
        name="todo"
        type="text"
        value={value}
        className="new-todo"
        placeholder="What needs to be done?"
        required
        autoFocus
      />
    </form>
  )
}
NewTaskForm.defaultProps = {
  todoItem: [],
  setTodoItem: () => {}
}

NewTaskForm.propTypes = {
  setTodoItem: PropTypes.func,
  todoItem: PropTypes.array
}
export default NewTaskForm
