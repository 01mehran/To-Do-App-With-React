//libraries
import { useState, useEffect, useRef } from "react";

// Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";
import { useTasks } from "@/context/TaskContext";

export const Upcoming = () => {
  // Context;
  const { tasks } = useTasks();

  // States;
  const [todayTasks, setTodayTasks] = useState([]);
  const [tomorrowTasks, setTomorrowTasks] = useState([]);
  const [thisWeekTasks, setThisWeekTasks] = useState([]);

  const today = useRef(new Date());
  const tomorrow = useRef(new Date());
  const thisWeek = useRef(new Date());

  useEffect(() => {
    const todayDate = new Date(today.current);
    todayDate.setHours(0, 0, 0, 0);

    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const thisWeekDate = new Date(todayDate);
    thisWeekDate.setDate(thisWeekDate.getDate() + 7);

    today.current = todayDate;
    tomorrow.current = tomorrowDate;
    thisWeek.current = thisWeekDate;
  }, []);

  useEffect(() => {
    setTodayTasks(
      tasks.filter((tsk) => {
        const taskDate = new Date(parseInt(tsk.dueDate));
        taskDate.setHours(0, 0, 0, 0);
        return taskDate.getTime() === today.current.getTime();
      }) || [],
    );

    setTomorrowTasks(
      tasks.filter((tsk) => {
        const taskDate = new Date(parseInt(tsk.dueDate));
        taskDate.setHours(0, 0, 0, 0);
        return taskDate.getTime() === tomorrow.current.getTime();
      }) || [],
    );

    setThisWeekTasks(
      tasks.filter((tsk) => {
        const taskDate = new Date(parseInt(tsk.dueDate));
        taskDate.setHours(0, 0, 0, 0);
        return taskDate > tomorrow.current && taskDate <= thisWeek.current;
      }) || [],
    );
  }, [tasks]);

  const upcomingLength =
    thisWeekTasks.length < 10
      ? `0${thisWeekTasks.length}`
      : thisWeekTasks.length;

  const upcomingLength2 =
    thisWeekTasks.length < 10
      ? `0${thisWeekTasks.length}`
      : thisWeekTasks.length > 15
        ? `${15}+`
        : thisWeekTasks.length;

  return (
    <div className="flex h-full flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu num={upcomingLength2} />
      <div className="w-full flex-col lg:flex">
        <div className="bg-green h-screen w-full lg:h-full">
          <ToDo
            tasks={todayTasks}
            context="Upcoming"
            num={upcomingLength}
            Today="Today"
          />
        </div>
        <div className="h-screen w-full flex-col md:space-x-5 lg:flex lg:h-full lg:flex-row">
          <ToDo tasks={tomorrowTasks} Today="Tomorrow" />
          <ToDo tasks={thisWeekTasks} Today="This Week" />
        </div>
      </div>
    </div>
  );
};
