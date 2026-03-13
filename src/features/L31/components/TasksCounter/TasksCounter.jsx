import { useSelector } from "react-redux";

export const TasksCounter = () => {
  const tasks = useSelector((store) => store.l31.tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc
    },
    { completed: 0, active: 0 },
  );

  return (
    <>
      <div>
        <h2>Tasks</h2>
        <p>Active: {count.completed}</p>
        <p>Conpleted: {count.active}</p>
      </div>
    </>
  );
};
