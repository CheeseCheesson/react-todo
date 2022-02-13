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
  };
  //^ UPDATEs
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
    setEditId(null);
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
  const [filtred, setFiltred] = useState();
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

    handelFilterItems(name);
  };

  function filter(name) {
    let newFilterActive = [...todoItem].filter(
      (item) =>
        item.status ===
        (name === "Active" ? false : name === "Completed" ? true : null)
    );
    console.log(newFilterActive);
    return newFilterActive;
  }

  const handelFilterItems = (name) => {
    switch (name) {
      case "All":
        setTodoItem(todoItem);
        setFiltred(null);
        break;
      case "Active":
        setFiltred(filter(name));
        break;
      case "Completed":
        setFiltred(filter(name));
        break;
      default:
        break;
    }
  };

  //! DELETE
  const handleDelete = (id) => {
    if (filtred) {
      for (const item of filtred) {
        if (!item.status) {
          const newFilterCheked = [...todoItem].filter(
            (post) => post.id !== id && !post.status
          );
          console.log("newFilterCheked", newFilterCheked);
          setFiltred(newFilterCheked);
        }
        if (item.status) {
          const newFilterCheked = [...todoItem].filter(
            (post) => post.id !== id && post.status
          );
          console.log("newFilterCheked", newFilterCheked);
          setFiltred(newFilterCheked);
        }
      }
    }

    const newTodoItem = todoItem.filter((post) => post.id !== id);
    setTodoItem(newTodoItem);
  };
  //! clear
  const handleClear = () => {
    setTodoItem([]);
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
  );
};

export default App;
