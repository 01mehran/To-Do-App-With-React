// Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

// Context;
import { useTasks } from "@/context/TaskContext";

export const Work = () => {
  const { tasks } = useTasks();

  const workList = tasks.filter((tsk) => tsk.type === "work");
  const workLength =
    workList.length < 10 ? `0${workList.length}` : workList.length;

  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />
      <div className="h-full w-full">
        <ToDo
          context="Work"
          Today="work tasks"
          num={workLength}
          tasks={workList}
        />
      </div>
    </div>
  );
};
