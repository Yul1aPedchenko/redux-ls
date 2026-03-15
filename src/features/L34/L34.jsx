import { useSelector, useDispatch } from "react-redux";
import { addTaskAsync, deleteTaskAsync, fetchTasks, toggleTaskAsync } from "./redux/thunks/tasksThunk";

import { TasksCounter } from "./components/TasksCounter/TasksCounter";
import { Filter } from "./components/Filter/Filter"; 

import s from "./L34.module.scss";
import { useEffect } from "react";

export const L34 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const tasks = useSelector((store) => store.l34.tasks.items);
  const filter = useSelector((store) => store.l34.filter);

  const getVisibleTasks = (tasks, filter) => {
    switch (filter.status) {
      case "active":
        return tasks.filter((task) => !task.completed);
      case "completed":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  };
  const visibleTasks = getVisibleTasks(tasks, filter);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTaskText = e.target.elements.text.value;
    dispatch(addTaskAsync(newTaskText));
    e.target.reset();
  };
  const handleDelete = (id) => {
    dispatch(deleteTaskAsync(id));
  };
  const handleComplete = (task) => {
    dispatch(toggleTaskAsync(task));
  };
  return (
    <>
      <div className={s.todos__wrap}>
        <div className={s.todos__subwrap}>
          <TasksCounter />
          <Filter />
        </div>

        <form onSubmit={handleSubmit} className={s.todos__form}>
          <input className={s.todos__input} type="text" name="text" placeholder="Enter task text..." />
          <button className={s.todos__btn} type="submit">
            Add
          </button>
        </form>
        <ul className={s.todos__list}>
          {visibleTasks.map((task) => {
            return (
              <li key={task.id}>
                <div className={s.todos__itemWrap}>
                  <input type="checkbox" checked={task.completed} onChange={() => handleComplete(task)} />
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
