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
      id: '',
      post: "",
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

  //^ UPDATE
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleUpdate = (id, post) => {
    setEditId(id);
    setEditValue(post);
  };
  const handleEditChange = ({ target }) => {
    setEditValue(target.value);
  };
  const handleSavePost = (event, id) => {
    event.preventDefault();
    let newArrPosts = [...todoItem]
    console.log(newArrPosts);
    let newPostEdit = newArrPosts.map((item) => {
      console.log(typeof id );
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
    console.log(id);
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
          onUpdate={handleUpdate}
          editId={editId}
          onChange={handleEditChange}
          valueInput={editValue}
          onSavePost={handleSavePost}
        />
        <Footer />
      </section>
    </section>
  );
};

export default App;
