import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/slices/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.l34.filter);

  const handleFilterChange = (status) => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div>
      <h2>Filter by status</h2>

      <button onClick={() => handleFilterChange("all")}>All</button>

      <button onClick={() => handleFilterChange("active")}>Active</button>

      <button onClick={() => handleFilterChange("completed")}>Completed</button>
    </div>
  );
};
