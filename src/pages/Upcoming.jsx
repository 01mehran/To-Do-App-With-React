// Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const Upcoming = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-5 py-4">
      <Menu />
        <div className="flex w-full flex-col">
          <div>
            <ToDo context="Upcoming" num={18} Today="Today" />
          </div>
          <div className="flex flex-col md:space-x-5 xl:flex-row">
            <ToDo Today="Tomorrow" />
            <ToDo Today="This Week" />
          </div>
        </div>
      </div>
  );
};
