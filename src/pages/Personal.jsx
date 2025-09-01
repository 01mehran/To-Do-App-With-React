// Components;
import { ToDo } from "@/components/ToDo";
import { Menu } from "@/components/Menu";

// Context;
import { useTasks } from "@/context/TaskContext";

export const Personal = () => {
  const { tasks } = useTasks();

  const personalList = tasks.filter((tsk) => tsk.type === "personal");
  const perLength =
    personalList.length < 10 ? `0${personalList.length}` : personalList.length;

  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />
      <div className="h-full w-full">
        <ToDo
          context="personal"
          Today="personal tasks"
          num={perLength}
          tasks={personalList}
        />
      </div>
    </div>
  );
};
