// Icons;
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { useTasks } from "@/context/TaskContext";
import { useState } from "react";
import { EditTask } from "./EditTask";

export const ToDoItem = ({ tasks }) => {
  const { HandleDeleteTask, loadingIds } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      HandleDeleteTask(tasks.documentId);
    }
  };
  return (
    <>
      <li className="border-b- flex items-center justify-between border-black/30 px-2 py-3">
        {!isEditing && (
          <>
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
              <button
                className="cursor-pointer text-lg text-black/70 transition-all duration-200 hover:text-green-500"
                onClick={() => setIsEditing(true)}
              >
                <FaRegEdit />
              </button>
              {/* Delete button; */}
              <button
                className="cursor-pointer text-lg text-black/70 transition-all duration-200 hover:text-red-500"
                onClick={() => handleDelete(tasks.documentId)}
              >
                {loadingIds.includes(tasks.documentId) ? (
                  <div className="mx-auto h-4 w-4 animate-spin rounded-full border-2 border-red-500 border-t-transparent"></div>
                ) : (
                  <AiOutlineDelete />
                )}
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <EditTask
            task={tasks}
            onClose={() => setIsEditing(false)}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
      </li>
    </>
  );
};
