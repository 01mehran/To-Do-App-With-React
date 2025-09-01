// Componenets;
import { useState } from "react";
import { UseUpdateTask } from "@/services/UseUpdateTask";
import { Toast, showErrorToast } from "./Toast";

export const EditTask = ({ task, onClose, setIsLoading, isLoading }) => {
  const [title, setTitle] = useState(task.title);

  const formDate = (ts) => {
    if (!ts) return "";
    const date = new Date(Number(ts));

    if (isNaN(date)) return "";
    return date.toISOString().split("T")[0];
  };

  const [dueDate, setDueDate] = useState(formDate(task.dueDate));
  const [type, setType] = useState(task.type);

  const updateTask = UseUpdateTask();

  const dueTimeStamp = new Date(dueDate).getTime();

  const handleEditTask = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await updateTask(task.documentId, title, dueTimeStamp, type);
      onClose();
    } catch (err) {
      showErrorToast(err.message);
      console.error(err);
    }
    finally{
      setIsLoading(false)
    }
    
  };

  return (
    <>
      <form
        onSubmit={handleEditTask}
        className="inset-3 w-full rounded-xl border-2 border-black/30 py-3 shadow-xl backdrop-blur-sm"
      >
        {/* Title */}
        <div className="flex flex-wrap justify-around gap-2">
          <input
            type="text"
            className="w-4/6 rounded-sm border-2 border-gray-100 px-2 py-1 outline-0"
            placeholder="Enter your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            className="w-4/6 rounded-sm border-2 border-gray-100 px-2 py-1 outline-0"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      {/* Types */}
        <div className="flex justify-center space-x-3 py-3">
          <div className="flex gap-2">
            <label htmlFor="work" className="font-inder font-medium">
              work
            </label>
            <input
              className="cursor-pointer accent-green-100 outline-0"
              type="radio"
              id="work"
              value="work"
              name="category"
              checked={type === "work"}
              onChange={() => setType("work")}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="personal" className="font-inder font-medium">
              personal
            </label>
            <input
              className="cursor-pointer accent-green-100 outline-0"
              type="radio"
              id="personal"
              value="personal"
              name="category"
              checked={type === "personal"}
              onChange={() => setType("personal")}
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="study" className="font-inder font-medium">
              study
            </label>
            <input
              className="cursor-pointer accent-green-100 outline-0"
              type="radio"
              id="study"
              value="study"
              name="category"
              checked={type === "study"}
              onChange={() => setType("study")}
            />
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button
            type="submit"
            className={`cursor-pointer rounded-sm bg-green-100 w-20 ring-2 ring-green-100 transition duration-150 hover:ring-offset-1 active:ring-0 ${isLoading && "pointer-events-none opacity-70"}`}
          >
            {isLoading ? (<div className="mx-auto size-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>) : "Save"}
          </button>
          <button
            type="button"
            className="bg-red ring-red cursor-pointer rounded-sm px-5 py-px text-gray-200 ring-2 transition duration-150 hover:ring-offset-1 active:ring-0"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
      <Toast />
    </>
  );
};
