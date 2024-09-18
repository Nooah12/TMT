type TaskCounterProps = {
    total: number;
    completed: number;
  };
  
  const TaskCounter = ({ total, completed }: TaskCounterProps) => {
    return (
      <section>
        <p>Total tasks: {total}</p>
        <p>Completed tasks: {completed}</p>
      </section>
    );
  };
  
  export default TaskCounter;
  