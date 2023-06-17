import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const handleClickDelete = (deletedTask) => {
    const newList = tasks.filter((task) => task.text !== deletedTask);
    setTasks(newList);
  };

  const filteredList = tasks.filter(
    (task) => task.category === category || category === "All"
  );
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onClickFilter={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredList} onClickDelete={handleClickDelete} />
    </div>
  );
}

export default App;
