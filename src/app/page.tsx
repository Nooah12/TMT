'use client'
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Header from "@/components/Header/Header";
import StatusFilter from "@/components/StatusFilter/StatusFilter";
import TaskInputForm from "@/components/TaskInputForm/TaskInputForm";
import TaskList from "@/components/TaskList/TaskList";
import { HTMLInputTypeAttribute, SetStateAction, useState } from "react";

type Task = {
  id: number;
  description: string;
  category: string;
  completed: boolean; 
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<HTMLInputTypeAttribute>('')
  const [selectedStatus, setSelectedStatus] = useState<HTMLInputTypeAttribute>('')

  const categories = ['Personal', 'Work'];
  
  const handleAddTask = (description: string, category: string) => {
    const newTask = {
      id: tasks.length + 1, // Generate a new ID
      description,
      category,
      completed: false, // Always false for new tasks
    };
    // Add the new task to the tasks array
    setTasks([...tasks, newTask]); // fungerar ändå??
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    // category filtering logic here??
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
    // and status here??
  };

  // toggling behavior
  /* const handleCompleteTask = (id: number) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  }; */

  // permently complete task 
  const handleCompleteTask = (id: number) => {
    const updatedTasks = tasks.map(task => 
      task.id === id && !task.completed ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };
  

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

// denna ok??
  const filteredTasks = tasks.filter(task => {
    const categoryMatches = selectedCategory ? task.category === selectedCategory : true;
    const statusMatches = selectedStatus === 'completed' ? task.completed : selectedStatus === 'pending' ? !task.completed : true;
    return categoryMatches && statusMatches;
  });

  return (
    <>
      <Header />
    <main>
      <TaskInputForm onAddTask={handleAddTask} />
      <CategoryFilter categories={categories} selectedCategory={selectedCategory}
        onChange={handleCategoryFilter}
      />
      <StatusFilter selectedStatus={selectedStatus} onChange={handleStatusFilter} />
      <TaskList onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} tasks={filteredTasks} />
    </main>
    </>
  );
}