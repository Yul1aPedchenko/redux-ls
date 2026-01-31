import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

export const TaskList = () => {
    const tasks = useSelector(getTasks);
    return (
        <>
            <ul>
                {
                    tasks.map((task) => {
                        return (
                            <li>{task.text}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}