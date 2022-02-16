import React, { useState } from 'react'

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
      active: false,
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
    if (valueInput) {
      setTodoItem([
        ...todoItem,
        {
          id: Date.now().toString().slice(-6),
          post: valueInput.todo,
          status: false,
        },
      ])
      setValueInput('')
    }
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
  }

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
    setTodoItem((prevTodo) =>
      prevTodo.map((item) => {
        if (item.id === id) {
          return { ...item, post: editValue }
        }
        return item
      })
    )
    setEditId(null)
  }

  //? footer
  const handleSelectFilter = (name) => {
    setButtonValue((prevState) =>
      prevState.map((item) => {
        if (item.name === name) {
          return { ...item, active: !item.active }
        } else if (item.name !== name) {
          return { ...item, active: false }
        }
        return item
      })
    )
    setFiltred((prevState) =>
      prevState?.map((item) => {
        if (item.name === name) {
          return { ...item, active: !item.active }
        } else if (item.name !== name) {
          return { ...item, active: false }
        }
        return item
      })
    )
    handelFilterItems(name)
  }
  function filter(name) {
    console.log(name)
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
      for (const item of filtred) {
        if (!item.status) {
          setFiltred((prevState) => prevState.filter((post) => post.id !== id && !post.status))
        }
        if (item.status) {
          setFiltred((prevState) => prevState.filter((post) => post.id !== id && post.status))
        }
      }
    }
    setTodoItem((prevState) => prevState.filter((post) => post.id !== id))
  }
  const handleClear = () => {
    setTodoItem([])
    setFiltred(null)
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
        />
        <Footer
          buttonValue={buttonValue}
          onChangeFilterButton={handleSelectFilter}
          countLeft={calcLeftItems(todoItem)}
          onClear={handleClear}
        />
      </section>
    </section>
  )
}

export default App
