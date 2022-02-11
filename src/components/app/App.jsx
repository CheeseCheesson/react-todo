import React, { useState } from "react";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import "./App.css";

const App = () => {
  //& CREATE
  const [valueInput, setValueInput] = useState({
    todo: "",
  });
  const [todoItem, setTodoItem] = useState([
    {
      id: "",
      post: "",
      status: false,
    },
  ]);
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
    };
    setTodoItem([...todoItem, newPost]);
    setValueInput("");
  };

  //? STATUS
  const [statusId, setStatusId] = useState("");
  const [isStatus, setIsStatus] = useState(false);
  const handleChangeStatus = (id) => {
    let newArrStatus = [...todoItem];
    let newState = newArrStatus.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
        setIsStatus((prevState) => !prevState);
        setStatusId(item.id)
      }
      return item;
    });
    setTodoItem(newState);
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
    setEditId(null);
  };

  //! DELETE
  const handleDelete = (id) => {
    const newTodoItem = todoItem.filter((post) => post.id !== id);
    setTodoItem(newTodoItem);
  };

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
          isStatus={isStatus}
          statusId={statusId}
        />
        <Footer />
      </section>
    </section>
  );
};

export default App;
