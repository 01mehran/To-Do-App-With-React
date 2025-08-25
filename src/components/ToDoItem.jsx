// Icons;
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useTasks } from "@/context/TaskContext";

export const ToDoItem = ({ tasks }) => {
  // const { HandleDeleteTask, isLoading } = useTasks();
  const { HandleDeleteTask, loadingIds } = useTasks();

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      HandleDeleteTask(tasks.documentId);
    }
  };
  return (
    <>
      <li className="flex items-center justify-between border-b-[1px] border-black/30 px-2 py-3">
      {/* Tasks title; */}
        <div className="flex items-center gap-3">
          <input
            id={`${tasks.id}`}
            type="checkbox"
            className="size-3.5 transform cursor-pointer accent-green-200 transition-all duration-200 hover:scale-110"
          />
          <label
            htmlFor={`${tasks.id}`}
            className="font-notoSans text-md font-normal text-black/70"
          >
            {tasks.title}
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
       {/* Edit button; */}
          <button className="cursor-pointer text-lg text-black/70  transition-all duration-200 hover:text-green-500">
            <FaRegEdit />
          </button>
          {/* Delete button; */}
          <button
            className="hover:text-red-500 cursor-pointer text-black/70 text-lg transition-all duration-200"
            onClick={() => handleDelete(tasks.documentId)}
          >
            {/* {isLoading === tasks.documentId ? (
              <div className="border-red mx-auto h-4 w-4 animate-spin rounded-full border-[2px] border-t-transparent"></div>
            ) : (
              <AiOutlineDelete />
            )} */}

            {loadingIds.includes(tasks.documentId) ? (
              <div className="border-red-500 mx-auto h-4 w-4 animate-spin rounded-full border-[2px] border-t-transparent"></div>
            ) : (
              <AiOutlineDelete />
            )}
          </button>
        </div>
      </li>
    </>
  );
};
