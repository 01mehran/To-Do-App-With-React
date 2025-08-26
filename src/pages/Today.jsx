// Libraries;
import { useTasks } from "@/context/TaskContext";
import { useEffect, useRef, useState } from "react";

//Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const Today = () => {
  const { tasks } = useTasks();

  const [todayTasks, setTodayTasks] = useState([]);
  const today = useRef(new Date());

  useEffect(() => {
    const todayDate = new Date(today.current);
    todayDate.setHours(0, 0, 0, 0);

    today.current = todayDate;
  }, []);

  useEffect(() => {
    setTodayTasks(
      tasks.filter((tsk) => {
        const taskDate = new Date(parseInt(tsk.dueDate));
        taskDate.setHours(0, 0, 0, 0);
        return taskDate.getTime() === today.current.getTime();
      }) || [],
    );
  }, [tasks]);

  const todayUpcommingPage =
    todayTasks.length < 10 ? `0${todayTasks.length}` : todayTasks.length;

  const todayUpcommingMenu =
    todayTasks.length < 10
      ? `0${todayTasks.length}`
      : todayTasks.length > 15
        ? `${15}+`
        : todayTasks.length;

  return (
    <div className="flex h-screen flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu num2={todayUpcommingMenu} />
      <div className="h-full w-full">
        <ToDo
          tasks={todayTasks}
          context="Today"
          num={todayUpcommingPage}
          Today="Today"
        />
      </div>
    </div>
  );
};
