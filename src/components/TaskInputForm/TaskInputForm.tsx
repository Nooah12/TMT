'use client'

import { useState } from "react";

type taskInputFormProps = {
  onAddTask: (description: string, category: string) => void; // Pass the description and category
}

const taskInputForm = ({onAddTask}:taskInputFormProps) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleAddTask = () => {
    // Check if the description is valid
    if (description.trim() === '' || description.trim().length < 3) {
      return 'ups something went wrong' // Optionally show an error message here
    }
    
    // Call onAddTask with the description and category
    onAddTask(description, category);

    // Optionally reset form after submission
    setDescription('');
  };

  return (
    <section className="w-full mb-4">
      <div className="bg-white p-2 m-auto w-3/4 md:w-2/4 lg:w-1/3 2xl:w-1/4 rounded">
        <div className="flex flex-col text-start ">
          <label className="p-2" htmlFor="description">Task Description:</label>
          <input className="p-2 border-2 rounded" value={description} id="description" placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)} // Update description state
          />
        </div>
        hello{category}
        <div className="flex flex-col text-start">
          <label className="p-2" htmlFor="category">Category:</label>
          <select className="p-2 border-2" value={category} id="category" name="category"
            onChange={(e) => setCategory(e.target.value)} // update category state
          >
            <option value="Personal">Personal</option> {/* behöver stort P för testet */}
            <option value="Work">Work</option>
          </select>
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </section>
  )
}

export default taskInputForm


