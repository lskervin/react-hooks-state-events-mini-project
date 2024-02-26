import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [tasks, setTasks] = useState(TASKS);
  
  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
    if ( selectedCategory === newTask.category) {
      setFilteredTasks([...filteredTasks, newTask]);
    }
    // Logic to handle the submission of the new task
    // You can perform any additional operations here, such as updating state
    console.log("New task submitted:", newTask);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} setFilteredTasks={setFilteredTasks} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} setFilteredTasks={setFilteredTasks} selectedCategory={selectedCategory} filteredTasks={filteredTasks} setTasks={setTasks} tasks={tasks}/>
      <TaskList tasks={filteredTasks} setTasks={setFilteredTasks} selectedCategory={selectedCategory} onDeleteTask={setTasks}/>
    </div>
  );
}

export default App;
