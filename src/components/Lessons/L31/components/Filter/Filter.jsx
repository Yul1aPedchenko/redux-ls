import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../../../../redux/l31/actions";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.l31.filter);
  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <>
      <div>
        <h2>Filter by status</h2>
        <button selected={filter.status === "all"} onClick={() => handleFilterChange("all")}>
          All
        </button>
        <button selected={filter.status === "active"} onClick={() => handleFilterChange("active")}>
          Active
        </button>
        <button selected={filter.status === "completed"} onClick={() => handleFilterChange("completed")}>
          Completed
        </button>
      </div>
    </>
  );
};
