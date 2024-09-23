import React from 'react';
import { Task } from '@/utils/types';

type TaskListProps = {
  tasks?: Task[]; // Mark tasks as optional to avoid undefined issues
  onCompleteTask: (id: number) => void; // do I need id:number here?
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks = [], onCompleteTask, onDeleteTask }:TaskListProps) => {
  return (
    <section className='w-[90%] 2xl:w-2/3 mb-4'>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p> 
        ) : (
          tasks.map((task) => {
            const buttonText = task.completed ? 'Undo' : 'Complete';
            const completeButtonClass = task.completed ? 'undo-btn text-sm md:text-base m-1 p-2' : 'complete-btn text-sm md:text-base m-1 p-2';
            return (
            <li className='flex items-center justify-between' key={task.id}>
              <div className='m-0'>
                <span className='text-sm md:text-base'>{task.description} ({task.category})</span>
              </div>
              <div>
                <button className={completeButtonClass} onClick={() => onCompleteTask(task.id)}>{buttonText}</button>
                <button className='delete-btn text-sm md:text-base m-1 p-2' onClick={() => onDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
            );
          })
        )}
      </ul>
    </section>
  );
};

export default TaskList;

