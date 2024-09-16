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

// Define the Task type
type Task = {
  id: number;
  description: string;
  category: string;
  completed: boolean;
};

// Define the props type for TaskList
type TaskListProps = {
  tasks?: Task[]; // Mark tasks as optional to avoid undefined issues
  onCompleteTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

const TaskList = ({ tasks = [], onCompleteTask, onDeleteTask }:TaskListProps) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <li key={task.id}>
            <span>{task.description}</span>
            <button onClick={() => onCompleteTask(task.id)}>Complete</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;

