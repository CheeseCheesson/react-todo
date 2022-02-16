import React from 'react'
import PropTypes from 'prop-types'

import TextAria from '../text-aria'
import './new-task-form.css'

const NewTaskForm = ({ valueInput, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextAria
        name="todo"
        type="text"
        value={valueInput || ''}
        classValue="new-todo"
        placeHolder="What needs to be done?"
        onChange={onChange}
      />
    </form>
  )
}
TextAria.propTypes = {
  valueInput: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
export default NewTaskForm
