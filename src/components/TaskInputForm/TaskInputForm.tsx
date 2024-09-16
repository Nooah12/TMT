'use client'

import { useState } from "react";

type taskInputFormProps = {
  onAddTask: (description: string, category: string) => void; // Pass the description and category
}

const taskInputForm = ({onAddTask}:taskInputFormProps) => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleAddTask = () => {
    // Check if the description is valid
    if (description.trim() === '' || description.trim().length < 3) {
      return 'ups something went wrong' // Optionally show an error message here
    }
    
    // Call onAddTask with the description and category
    onAddTask(description, category);

    // Optionally reset form after submission
    setDescription('');
    setCategory('');
  };

  return (
    <main className='text-center mt-20'>
      <div>
        <div>
          <label className="p-2" htmlFor="description">Task Description</label>
          <input className="p-2" value={description} id="description" placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)} // Update description state
          />
        </div>
        <div>
          <label className="p-2" htmlFor="category">Category</label>
          <select value={category} id="category" name="category"
            onChange={(e) => setCategory(e.target.value)} // update category state
          >
            <option value="Personal">Personal</option>
            <option value="work">Work</option>
          </select>
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </main>
  )
}

export default taskInputForm


