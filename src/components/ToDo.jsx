// Icons;
import { AiOutlinePlus } from "react-icons/ai";

// Components;
import { ToDoList } from "./ToDoList";
import { Link } from "react-router-dom";

export const ToDo = ({ context, num, Today, tasks = [], isloading }) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {(context || num) && (
        <header className="flex items-baseline gap-5">
          <h2 className="font-oswald text-4xl font-normal">{context}</h2>
          <span className="font-notoSans w-13 rounded-tl-[100px] rounded-tr-[50px] rounded-br-[100px] rounded-bl-[100px] border border-gray-100 text-center text-base font-normal">
            {num}
          </span>
        </header>
      )}
      <main
        className={`mt-5 h-2/2 w-full overflow-auto rounded-4xl border border-gray-100 px-11 pb-3.5`}
      >
        <div className="sticky top-0 z-10 w-full bg-[#ffffff] pt-3.5">
          <div className="flex items-baseline justify-between">
            <h3 className="font-oswald text-4xl font-normal">{Today}</h3>
            <Link
              to="/newTask"
              className="transform cursor-pointer text-2xl transition duration-200 hover:scale-90"
            >
              <AiOutlinePlus />
            </Link>
          </div>
          <hr className="border-px mt-3 w-full border-gray-100" />
        </div>
        {/* Todo List */}
        <ToDoList tasks={tasks} isloading={isloading} />
      </main>
    </div>
  );
};
