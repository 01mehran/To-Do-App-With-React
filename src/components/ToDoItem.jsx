export const ToDoItem = () => {
  return (
    <>
      <li className="flex items-center gap-3 border-b-[1px] border-black/30 px-2 py-3 ">
        <input
          id="input-task"
          type="checkbox"
          className="size-3.5 transform cursor-pointer transition-all duration-200 hover:scale-110 accent-green-200"/>
        <label htmlFor="input-task" className="font-notoSans text-sm font-normal text-black/70">
          Database create for company
        </label>
      </li>
    </>
  );
};
