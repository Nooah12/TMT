import React from 'react';
import { Task } from '@/utils/types';

type TaskListProps = {
  tasks?: Task[]; // Mark tasks as optional to avoid undefined issues
  onCompleteTask: (id: number) => void; // do I need id:number here?
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks = [], onCompleteTask, onDeleteTask }:TaskListProps) => {
  return (
    <section>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks available</p> 
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span className='mr-1'>{task.description} ({task.category})</span> {/* should work now, only one span */}
              <button onClick={() => onCompleteTask(task.id)}>Complete</button>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default TaskList;

