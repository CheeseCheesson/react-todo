import React, { useState, useEffect } from 'react'
import { formatDistanceToNow } from 'date-fns'

import Footer from '../footer/footer'
import NewTaskForm from '../new-task-form'
import TaskList from '../task-list'
import './App.css'
import { calcLeftItems } from '../../utils/itemsLeftCounters'

const App = () => {
  //& create
  const [valueInput, setValueInput] = useState({
    todo: '',
  })
  const [todoItem, setTodoItem] = useState([])
  //^ edit/update
  const [editId, setEditId] = useState(null)
  const [editValue, setEditValue] = useState('')
  //* filter
  const initialButton = [
    {
      id: 1,
      name: 'All',
      active: true,
    },
    {
      id: 2,
      name: 'Active',
      active: false,
    },
    {
      id: 3,
      name: 'Completed',
      active: false,
    },
  ]
  const [buttonValue, setButtonValue] = useState(initialButton)
  const [findButton, setFindButton] = useState(null)
  const [filtred, setFiltred] = useState()

  //! main
  const handleInputChange = ({ target }) => {
    let { name, value } = target
   
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (valueInput.todo && valueInput.todo.trim().length) {
      setTodoItem([
        ...todoItem,
        {
          id: Date.now().toString().slice(-6),
          post: valueInput.todo,
          status: false,
        },
      ])
      if (filtred) {
        setFiltred([
          ...filtred,
          {
            id: Date.now().toString().slice(-6),
            post: valueInput.todo,
            status: false,
          },
        ])
      }
    }
    setValueInput('')
  }
  //* STATUS
  const handleChangeStatus = (id) => {
    setTodoItem((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status }
        }
        return item
      })
    )
    if (filtred) {
      setFiltred((prevState) =>
        prevState.map((item) => {
          if (item.id === id) {
            return { ...item, status: !item.status }
          }
          return item
        })
      )
    }
  }
  //timer
  const createdTime = new Date()
  const [timer, setTimer] = useState(formatDistanceToNow(createdTime, { includeSeconds: true }))
  const timerUpdate = () => {
    setTimer(() => formatDistanceToNow(createdTime, { includeSeconds: true }))
  }

  useEffect(() => {
    const intervalId = setInterval(() => timerUpdate(), 1000)
    return () => clearInterval(intervalId)
  }, [])

  //^ update
  const handleUpdatePost = (id, post) => {
    setEditId(id)
    setEditValue(post)
  }
  const handleEditPost = ({ target }) => {
    setEditValue(target.value)
  }

  const handleSavePost = (event, id) => {
    event.preventDefault()
    const elInx = todoItem.findIndex((indx) => indx.id === id)
    const newTodos = [...todoItem]
    newTodos[elInx].post = editValue
    setTodoItem(newTodos)
    setEditId(null)
  }

  //? footer
  // filter
  const handleSelectButtonFilter = ({ id, name, active }) => {
    setFindButton({ id, name, active })
    setButtonValue((prevState) =>
      prevState.map((item) => {
        if (item.name === name) {
          return { ...item, active: true }
        } else if (item.name !== name) {
          return { ...item, active: false }
        }
        return item
      })
    )
    handelFilterItems(name)
  }
  function filter(name) {
    return [...todoItem].filter(
      (item) => item.status === (name === 'Active' ? false : name === 'Completed' ? true : null)
    )
  }

  const handelFilterItems = (name) => {
    switch (name) {
      case 'All':
        setTodoItem(todoItem)
        setFiltred(null)
        break
      case 'Active':
        return setFiltred(filter(name))
      case 'Completed':
        return setFiltred(filter(name))
      default:
        break
    }
  }

  //! delete/clear
  const handleDelete = (id) => {
    if (filtred) {
      setFiltred((prevState) => prevState.filter((post) => post.id !== id))
    }
    setTodoItem((prevState) => prevState.filter((post) => post.id !== id))
  }
  const handleClear = () => {
    setTodoItem([])
    setFiltred(null)
    setButtonValue(initialButton)
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm valueInput={valueInput?.todo} onChange={handleInputChange} onSubmit={handleSubmit} />
      </header>
      <section className="main">
        <TaskList
          posts={todoItem}
          onDelete={handleDelete}
          onUpdate={handleUpdatePost}
          editId={editId}
          onChange={handleEditPost}
          valueInput={editValue}
          onSavePost={handleSavePost}
          onStatus={handleChangeStatus}
          filtred={filtred}
          timer={timer}
          findButton={findButton}
        />
        <Footer
          buttonValue={buttonValue}
          onChangeFilterButton={handleSelectButtonFilter}
          countLeft={calcLeftItems(todoItem)}
          onClear={handleClear}
        />
      </section>
    </section>
  )
}

export default App
