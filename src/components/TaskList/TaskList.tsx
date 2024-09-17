/* type Task = {
  id: number;
  description: string;
  category: string;
  completed: boolean;
};

type TaskListProps = {
  onCompleteTask: () => {}
  onDeleteTask: () => {}
};

const TaskList = ({ tasks, onCompleteTask, onDeleteTask }:TaskListProps) => {
  return (
    <ul>
          <li key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => onCompleteTask(task.id)}>Complete</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
    </ul>
  );
};

export default TaskList;
 */

import React from 'react';

type Task = {
  id: number;
  description: string;
  category: string;
  completed: boolean;
};

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
              <span className='mr-1'>{task.description}</span>
              <span>{task.category}</span> {/* Not working?? */}
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

