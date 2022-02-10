import React, { useState } from "react";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form";
import TaskList from "../task-list";
import "./App.css";

const App = () => {
  const [valueInput, setValueInput] = useState({
    todo: "",
  });

  const [todoItem, setTodoItem] = useState([
    {
      id: "",
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
    console.log('click');
    const newPost = {
      id: Date.now().toString().slice(-6),
      post: valueInput.todo,
    };
    setTodoItem([...todoItem, newPost]);
    setValueInput("");
  };
  const handleDelete = (id) => {
    console.log(id);
    const newTodoItem = todoItem.filter((post) => post.id !== id);
    setTodoItem(newTodoItem);
  };
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm valueInput={valueInput?.todo} onChange={handleInputChange} onSubmit={handleSubmit} />
      </header>
      <section className="main">
        <TaskList posts={todoItem} onDelete={handleDelete} />
        <Footer />
      </section>
    </section>
  );
};

export default App;
