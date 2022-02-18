import React, { useState } from 'react'

import Footer from '../footer/footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import './App.css'

// last edit
const App = () => {
  
  const [todoItem, setTodoItem] = useState([])
  const [buttonFilter, setButtonFilter] = useState()
  const handleGetFiltredTodo = (state) => {
    setButtonFilter(state)
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm  setTodoItem={setTodoItem} todoItem={todoItem}/>
      </header>
      <section className="main">
        <TaskList todo={todoItem} setTodoItem={setTodoItem} buttonFilter={buttonFilter}/>
        <Footer  buttonFilter = {buttonFilter} todoItem = {todoItem} setTodoItem={setTodoItem} onButtonState={handleGetFiltredTodo} />
      </section>
    </section>
  )
}

export default App
