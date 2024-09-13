import React from 'react'

type taskInputFormProps = {
  onAddTask: () => {}
}

const taskInputForm = ({onAddTask}:taskInputFormProps) => {
  return (
    <main className='text-center mt-20'>
      <div>
        <div>
          <label className="p-2" htmlFor="user-input">Task Description</label>
          <input id="user-input" className="p-2" placeholder="Enter description" />
        </div>
        <div>
          <label className="p-2" htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="categories">All Categories</option>
            <option value="work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
        <button>Add Task</button>
      </div>
    </main>
  )
}

export default taskInputForm