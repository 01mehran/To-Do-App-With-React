// Components;
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ tasks, isloading }) => {
  return (
    <div className="relative">
      {isloading ? (
        <div className="mt-3 flex items-center gap-2">
          <span className="font-notoSans text-sm text-black/50">
            Getting Tasks List
          </span>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-green-100 border-t-transparent"></span>
        </div>
      ) : (
        <ul>
          {tasks.map((tsk) => (
            <ToDoItem tasks={tsk} key={tsk.id} />
          ))}
        </ul>
      )}
    </div>
  );
};
