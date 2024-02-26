
import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setFilteredTasks, selectedCategory, setSelectedCategory }) {

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    const filterTask = tasks.filter(
      (task) => task.category === category || category === "All"
    );
    setFilteredTasks(filterTask);
    console.log(filterTask)
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={category === selectedCategory ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;