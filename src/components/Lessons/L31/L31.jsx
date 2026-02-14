import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleComplete } from "../../../redux/l31/actions";

export const L31 = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.l31.tasks);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskText = e.target.elements.text.value;
    dispatch(addTask(newTaskText));
    e.target.reset();
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleComplete = (id) => {
    dispatch(toggleComplete(id));
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="text" placeholder="Enter task text..." />
          <button type="submit">Add</button>
        </form>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <div>
                  <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task.id)} />
                  <h2>{task.text}</h2>
                  <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
