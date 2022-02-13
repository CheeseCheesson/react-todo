import React, { useState } from "react";

import NewTaskForm from "../new-task-form";


const MainInput = () => {

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

  return (
        <NewTaskForm
          valueInput={valueInput?.todo}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />

  );
};

export default MainInput;
