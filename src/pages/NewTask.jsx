// Libraries;
import { useState } from "react";
import { showErrorToast, Toast } from "../components/Toast";

// Componenets;
import { CreateNewTask } from "@/services/CreateNewTask";
import { Menu } from "@/components/Menu";

export const NewTask = () => {
  // States
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState("work");
  const [isLoading, setIsLoading] = useState(false);

  // Functions;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dueTimeStamp = new Date(dueDate).getTime();

    if (title.trim() && dueDate.trim()) {
      try {
        setIsLoading(true);
        const res = await CreateNewTask(title, dueTimeStamp, type);

        setTitle("");
        setDueDate("");
        setType("work");
      } catch (err) {
        console.log(err);
        const errorMessage = err.response?.data?.error?.message;
        showErrorToast(errorMessage || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />

      <main className="flex w-full flex-col">
        <h2 className="font-oswald text-4xl font-normal">New task</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-1 items-center justify-center overflow-auto rounded-4xl border-[1px] border-gray-100 p-12 px-11"
        >
          <div className="w-full max-w-[600px] space-y-5">
            {/* Title */}
            <article>
              <label
                className="font-notoSans mb-1 block text-xl font-normal"
                htmlFor="taskTitile"
              >
                Task title
              </label>
              <input
                type="text"
                id="taskTitile"
                className="w-full rounded-sm border-1 border-gray-100 px-3 py-2 font-normal outline-0"
                placeholder="Enter your task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </article>
            {/* Date */}
            <article>
              <label
                className="font-notoSans mb-1 block text-xl font-normal"
                htmlFor="date"
              >
                Pick a date
              </label>
              <input
                type="date"
                className="w-full rounded-sm border-1 border-gray-100 px-3 py-2 font-normal outline-0"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </article>
            {/* Options; */}
            <fieldset className="mb-8 border-1 border-gray-100 p-8">
              <legend className="font-oswal mb-2 block px-2 text-xl font-normal">
                Select an option
              </legend>
              <div className="flex flex-wrap items-center justify-center space-x-8">
                {/* Work */}
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

                {/* Personal */}
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

                {/* Study */}
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
            </fieldset>

            <button
              type="submit"
              className={`font-inder mx-auto block h-10 w-2/3 cursor-pointer rounded-[10px] bg-green-100 py-2 text-base font-medium transition-all hover:translate-y-px ${isLoading && "pointer-events-none opacity-70"}`}
            >
              {isLoading ? (
                <div className="mx-auto h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              ) : (
                "Add Task"
              )}
            </button>
          </div>
        </form>
      </main>
      <Toast />
    </div>
  );
};
