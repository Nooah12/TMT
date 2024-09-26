'use client'

import { HTMLInputTypeAttribute, useState } from "react";

type taskInputFormProps = {
  onAddTask: (description: string, category: string) => void;
}

const taskInputForm = ({onAddTask}:taskInputFormProps) => {
  const [description, setDescription] = useState<HTMLInputTypeAttribute>('');
  const [category, setCategory] = useState<HTMLInputTypeAttribute>('Personal');

  const handleAddTask = () => {
    if (description.trim() === '') {
      return alert('You need to type something!')
    }
    onAddTask(description, category);
    // reset form after submission
    setDescription('');
  };

  return (
    <section className="w-full mb-4">
      <div className="p-2 m-auto w-[90%]">
        <div className="flex flex-col text-start ">
          <label className="text-white p-2 font-bold" htmlFor="description">Task Description:</label>
          <input className="p-2 border-2 rounded-3xl" value={description} id="description" placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-start">
          <label className="text-white pt-2 px-2 font-bold" htmlFor="category">Category:</label>
          <div className="flex items-center">
            <select className="p-1 border-2" value={category} id="category" name="category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
            </select>
            <div>
              <button className="text-white hover:bg-[#212020]" onClick={handleAddTask}>+ Add Task</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default taskInputForm


