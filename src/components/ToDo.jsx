// Icons;
import plusIcon from "@icons/plusIcon.svg";

// Components;
import { ToDoList } from "./ToDoList";

export const ToDo = ({ context, num, Today }) => {
  return (
    <div className="w-full h- flex flex-col overflow-hidden">
      {(context || num) && (
        <header className="flex items-baseline gap-5 ">
          <h2 className="font-oswald text-4xl font-normal">{context}</h2>
          <span className="font-notoSans border-gray-100 w-[52px] rounded-tl-[100px] rounded-tr-[50px] rounded-br-[100px] rounded-bl-[100px] border-[1px] text-center text-base font-normal">
            {num}
          </span>
        </header>
      )}
      <main className={`border-gray-100 mt-5 flex-1 overflow-y-scroll rounded-4xl border-[1px] px-11 pb-3.5`}>
        <div className="sticky top-0 w-full bg-[#ffffff] pt-3.5">
          <h3 className="font-oswald text-4xl font-normal">{Today}</h3>
          <article className="border-gray-100 mt-5 flex h-10 items-center gap-2 rounded-[12px] border-[1px] px-2">
            <img src={plusIcon} alt="plusIcon" className="w-4" />
            <input
              type="text"
              className="h-full flex-1 border-0 outline-0"
              placeholder="Add new tasks"
            />
          </article>
        </div>
        {/* Todo List */}
        <ToDoList />
      </main>
    </div>
  );
};
