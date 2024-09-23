'use client'
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import Header from "@/components/Header/Header";
import StatusFilter from "@/components/StatusFilter/StatusFilter";
import TaskCounter from "@/components/TaskCounter/TaskCounter";
import TaskInputForm from "@/components/TaskInputForm/TaskInputForm";
import TaskList from "@/components/TaskList/TaskList";
import { HTMLInputTypeAttribute, SetStateAction, useState } from "react";
import { Task } from "@/utils/types"; 

const defaultTasks = [
  { id: 1, description: "Task 1", category: "Personal", completed: false },
  { id: 2, description: "Task 2", category: "Work", completed: false }
]

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
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
    setTasks([newTask, ...tasks]);  
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
  };

  const handleCompleteTask = (id: number) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task //!task.completed means that it will always shift the current completed status
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length; // counting the total number of tasks
  const completedTasks = tasks.filter(task => task.completed).length; // completed tasks = true??
  
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
      <section className="flex gap-4 mb-4">
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} onChange={handleCategoryFilter} />
        <StatusFilter selectedStatus={selectedStatus} onChange={handleStatusFilter} />
      </section>
      <TaskList onCompleteTask={handleCompleteTask} onDeleteTask={handleDeleteTask} tasks={filteredTasks} />
      <TaskCounter total={totalTasks} completed={completedTasks} />
    </main>
    </>
  );
}