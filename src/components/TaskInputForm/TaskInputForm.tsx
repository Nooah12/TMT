'use client'

import { HTMLInputTypeAttribute, useState } from "react";

type taskInputFormProps = {
  onAddTask: (description: string, category: string) => void;
}

const taskInputForm = ({onAddTask}:taskInputFormProps) => {
  const [description, setDescription] = useState<HTMLInputTypeAttribute>('');
  const [category, setCategory] = useState<HTMLInputTypeAttribute>('Personal');

  const handleAddTask = () => {
    // Check if the description is valid
    if (description.trim() === '') {
      return alert('You need to type something!')
    }
    onAddTask(description, category);
    // reset form after submission
    setDescription('');
  };

  return (
    <section className="w-full mb-4">
      <div className="p-2 m-auto w-3/4 md:w-2/4 lg:w-1/3 2xl:w-1/4 rounded">
        <div className="flex flex-col text-start ">
          <label className="text-white p-2 font-bold" htmlFor="description">Task Description:</label>
          <input className="p-2 border-2 rounded" value={description} id="description" placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)} // Update description state
          />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-white p-2 font-bold" htmlFor="category">Category:</label>
          <select className="p-2 border-2" value={category} id="category" name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
          </select>
        </div>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </section>
  )
}

export default taskInputForm


