// Components;
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((tsk) => (
        <ToDoItem tasks={tsk} key={tsk.id} />
      ))}
    </ul>
  );
};
