import { Menu } from "@/components/Menu";

export const NewTask = () => {
  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />

      <main className="flex w-full flex-col">
        <h2 className="font-oswald text-4xl font-normal">New task</h2>
        <form className="mt-5 flex flex-1 items-center justify-center overflow-auto rounded-4xl border-[1px] border-gray-100 p-12 px-11">
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
                  <label htmlFor="work">work</label>
                  <input
                    className="cursor-pointer accent-green-100"
                    type="radio"
                    id="work"
                    value="work"
                    name="category"
                  />
                </div>

                {/* Personal */}
                <div className="flex gap-2">
                  <label htmlFor="personal">personal</label>
                  <input
                    className="cursor-pointer accent-green-100"
                    type="radio"
                    id="personal"
                    value="personal"
                    name="category"
                  />
                </div>

                {/* Study */}
                <div className="flex gap-2">
                  <label htmlFor="study">study</label>
                  <input
                    className="cursor-pointer accent-green-100"
                    type="radio"
                    id="study"
                    value="study"
                    name="category"
                  />
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              className="mx-auto block cursor-pointer rounded-sm border-1 border-gray-100 px-12 py-1.5 transition-all duration-200 hover:shadow-sm"
            >
              Add Task
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
