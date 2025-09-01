// Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

// Context;
import { useTasks } from "@/context/TaskContext";

export const Study = () => {
  const { tasks } = useTasks();

  const studyList = tasks.filter((tsk) => tsk.type === "study");
  const studyLength =
    studyList.length < 10 ? `0${studyList.length}` : studyList.length;

  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />
      <div className="h-full w-full">
        <ToDo
          context="study"
          Today="study tasks"
          num={studyLength}
          tasks={studyList}
        />
      </div>
    </div>
  );
};
