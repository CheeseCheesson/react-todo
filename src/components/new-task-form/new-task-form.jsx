/* eslint-disable no-restricted-globals */
import React from "react"
import TextAria from "../text-aria"
import "./new-task-form.css"
import PropTypes from "prop-types"

const NewTaskForm = ({ valueInput, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <TextAria
        name="todo"
        type="text"
        value={valueInput || ""}
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
