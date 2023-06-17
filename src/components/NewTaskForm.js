import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [todo, setTodo] = useState({
    text: "",
    category: "Code",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(todo);
    setTodo({
      text: "",
      category: "Code",
    });
  };

  const categoryOptions = categories.map((category) => {
    return <option key={category}>{category}</option>;
  });
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={todo.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={todo.category} onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
