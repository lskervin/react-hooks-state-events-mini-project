import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask, setTasks }) {
  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete)) ;
    onDeleteTask(tasks);
  };

  const filteredTasks = selectedCategory
    ? tasks.filter((task) => task.category === selectedCategory || selectedCategory === "All")
    : tasks;

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDelete={() => handleDeleteTask(task)} />
      ))}
    </div>
  );
}

export default TaskList;

