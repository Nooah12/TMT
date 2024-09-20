type TaskCounterProps = {
    total: number;
    completed: number;
  };
  
  const TaskCounter = ({ total, completed }: TaskCounterProps) => {
    return (
      <section className="align-text-bottom">
        <p>Total tasks: {total}</p>
        <p>Completed tasks: {completed}</p>
      </section>
    );
  };
  
  export default TaskCounter;
  