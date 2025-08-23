export const ToDoItem = ({ tasks }) => {
  return (
    <>
      <li className="flex items-center gap-3 border-b-[1px] border-black/30 px-2 py-3">
        <input
          id={`${tasks.id}`}
          type="checkbox"
          className="size-3.5 transform cursor-pointer accent-green-200 transition-all duration-200 hover:scale-110"
        />
        <label
          htmlFor={`${tasks.id}`}
          className="font-notoSans text-sm font-normal text-black/70"
        >
          {tasks.title}
        </label>
      </li>
    </>
  );
};
