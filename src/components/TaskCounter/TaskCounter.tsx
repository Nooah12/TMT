type TaskCounterProps = {
    total: number;
    completed: number;
  };
  
  const TaskCounter = ({ total, completed }: TaskCounterProps) => {
    return (
      <section className="mt-auto bg-green-300 w-full p-2 text-center shadow-inner"> 
        <p>Total tasks: {total}</p>
        <p>Completed tasks: {completed}</p>
      </section>
    );
  };
  
  export default TaskCounter;
  