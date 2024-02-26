// import React from "react";
// import { useState } from "react";

// function NewTaskForm({categories, selectedCategory, setFilteredTasks, filteredTasks, setTasks, tasks}) {
//   const [text, setText] = useState("");
//   const [category, setCategory] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   // Add validation or other logic here if needed
//   const newTask = {
//     details: text,
//     category
//   };
//   setTasks([...tasks, newTask]);
//   if (selectedCategory === "All" || selectedCategory === newTask.category) {
//     setFilteredTasks([...filteredTasks, newTask]);
//   }

//   console.log(tasks);
// };

//   return (
//     <form onSubmit={(e)=> {handleSubmit(e)}}className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" onChange={(e) => setText(e.target.value)}/>
//       </label>
//       <label>
//         Category
//         <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
//         {categories && categories.length > 1 &&
//             categories.map((category, index) => (
//             <option key={index} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;
import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, selectedCategory, setFilteredTasks, filteredTasks, setTasks, tasks, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or other logic here if needed
    const newTask = {
      text,
      category
    };
    onTaskFormSubmit(newTask); // Call the callback function with the new task
    setText(""); // Clear the input fields after submission
    setCategory("");

    console.log(tasks);
  };

  return (
    <form onSubmit={(e) => { handleSubmit(e) }} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories && categories.length > 0 &&
            categories.map((category, index) => (
              index > 0 &&
              <option key={index} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
