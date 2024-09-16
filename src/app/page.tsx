'use client'
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Header from "@/components/Header/Header";
import StatusFilter from "@/components/StatusFilter/StatusFilter";
import TaskInputForm from "@/components/TaskInputForm/TaskInputForm";
import TaskList from "@/components/TaskList/TaskList";
import { useState } from "react";

type Task = {
  id: number;
  description: string;
  category: string;
};

export default function Home() {
  //const [tasks, setTasks]=useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedstatus] = useState('');

  const categories = ['Work', 'Personal'];
  
  const handleAddTask = (description: string, category: string) => {
    const newTask = {
      id: tasks.length + 1, // Generate a new ID
      description,
      category,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);
  };

  // function för CategoryFilter o StatusFilter??
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Handle category filtering logic here
  };

  const handleStatusChange = (status: string) => {
    setSelectedstatus(status);
    // Handle status filtering logic here
  };

  // Add onCompleteTask and onDeleteTask functions??

  return (
    <>
      <Header />
    <main>
      <TaskInputForm onAddTask={handleAddTask} />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory}
        onChange={handleCategoryChange}
      />
      <StatusFilter selectedStatus={selectedStatus} onChange={handleStatusChange} />
      <TaskList onCompleteTask={""} onDeleteTask={""} />
    </main>
    </>
  );
}



/* 'use client'
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Header from "@/components/Header/Header";
import StatusFilter from "@/components/StatusFilter/StatusFilter";
import TaskInputForm from "@/components/TaskInputForm/TaskInputForm";
import TaskList from "@/components/TaskList/TaskList";
import { useState } from "react";

type Task = {
  id: number;
  description: string;
  category: string;
};

export default function Home() {
  //const [tasks, setTasks]=useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const handleAddTask = (description: string, category: string) => {
    const newTask = {
      id: tasks.length + 1, // Generate a new ID
      description,
      category,
    };

    // Add the new task to the tasks array
    setTasks([...tasks, newTask]);
  };

  // function för CategoryFilter o StatusFilter??

  return (
    <>
      <Header />
      <TaskInputForm onAddTask={handleAddTask} />
      <CategoryFilter />
      <StatusFilter selectedStatus={""} onChange={""} />
      <TaskList />
    </>
  );
} */




// code working to add task without original comps

/*   'use client'
  import Header from "@/components/Header/Header";
  import StatusFilter from "@/components/StatusFilter/StatusFilter";
  import TaskInputForm from "@/components/TaskInputForm/TaskInputForm";
  import TaskList from "@/components/TaskList/TaskList";
  import { useState } from "react";
  
  type Task = {
    id: number;
    description: string;
    category: string;
  };
  
  const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
  
    const handleAddTask = (description: string, category: string) => {
      const newTask = {
        id: tasks.length + 1, // Generate a new ID
        description,
        category,
      };
  
      // Add the new task to the tasks array
      setTasks([...tasks, newTask]);
    };
  
    return (
      <div>
        <h1>Task Management App</h1>
        <TaskInputForm onAddTask={handleAddTask} /> {/* Pass handleAddTask 
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.description} - {task.category}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default App; */
  