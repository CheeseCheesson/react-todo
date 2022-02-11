import React, { useState } from "react";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import "./App.css";
import { calcLeftItems } from "../utils/itemsLeftCounters";

const App = () => {
  //! //////////////////////////////////////BLOCK MAIN //////////////////////////////////////////////
  //& CREATE
  const [valueInput, setValueInput] = useState({
    todo: "",
  });
  const [todoItem, setTodoItem] = useState([]);
  const [todoItemDump, setTodoItemDump] = useState([]);

  const handleInputChange = ({ target }) => {
    let { name, value } = target;
    setValueInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now().toString().slice(-6),
      post: valueInput.todo,
      status: false,
    };
    if (valueInput) {
      setTodoItem([...todoItem, newPost]);
      setTodoItemDump([...todoItem, newPost]);
      setValueInput("");
    }
  };
  //? STATUS
  const handleChangeStatus = (id) => {
    let newArrStatus = [...todoItem];
    let newState = newArrStatus.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodoItem(newState);
    setTodoItemDump(newState);
  };
  //^ UPDATE
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const handleUpdatePost = (id, post) => {
    setEditId(id);
    setEditValue(post);
  };
  const handleEditPost = ({ target }) => {
    setEditValue(target.value);
  };
  const handleSavePost = (event, id) => {
    event.preventDefault();
    let newArrPosts = [...todoItem];
    let newPostEdit = newArrPosts.map((item) => {
      if (item.id === id) {
        item.post = editValue;
      }
      return item;
    });
    setTodoItem(newPostEdit);
    setTodoItemDump(newPostEdit);
    setEditId(null);
  };
  //! DELETE
  const handleDelete = (id) => {
    const newTodoItem = todoItem.filter((post) => post.id !== id);
    setTodoItem(newTodoItem);
    setTodoItemDump(newTodoItem);
  };
  //! //////////////////////////////////////BLOCK MAIN //////////////////////////////////////////////

  //? //////////////////////////////////////FOOTER //////////////////////////////////////////////
  const [buttonValue, setButtonValue] = useState([
    {
      id: 1,
      name: "All",
      active: false,
    },
    {
      id: 2,
      name: "Active",
      active: false,
    },
    {
      id: 3,
      name: "Completed",
      active: false,
    },
  ]);
  const handleSelectFilter = (name) => {
    let newActive = [...buttonValue].map((item) => {
      if (item.name === name) {
        item.active = !item.active;
      } else if (item.name !== name) {
        item.active = false;
      }
      return item;
    });
    setButtonValue(newActive);

    handelFilterItems(todoItem, name);
  };

  const handelFilterItems = (todoItem = {}, name) => {
    if (name === "Completed") {
      let newFilterActive = [...todoItemDump].filter(
        (todoItem) => todoItem.status === true
      );
      setTodoItem(newFilterActive);
      return;
    }

    if (name === "Active") {
      let newFilterActive = [...todoItemDump].filter(
        (todoItem) => todoItem.status === false
      );
      setTodoItem(newFilterActive);
      return;
    }
    if (name === "All") {
      let newFilterActive = [...todoItemDump].filter((todoItem) => todoItem);
      setTodoItem(newFilterActive);
      return;
    }
  };

  const handleClear = () => {
    setTodoItem([]);
    setTodoItemDump([]);
  };
  //? //////////////////////////////////////FOOTER //////////////////////////////////////////////

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm
          valueInput={valueInput?.todo}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
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
        />
        <Footer
          buttonValue={buttonValue}
          onChangeFilterButton={handleSelectFilter}
          countLeft={calcLeftItems(todoItem)}
          onClear={handleClear}
        />
      </section>
    </section>
  );
};

export default App;
