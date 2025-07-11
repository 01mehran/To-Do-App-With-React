// Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const Upcoming = () => {
  return (
    <div className="flex h-full flex-col gap-6 px-5 py-4 lg:flex-row">
      <Menu />
      <div className="w-full flex-col lg:flex">
        <div className="bg-green h-screen w-full lg:h-full">
          <ToDo context="Upcoming" num={18} Today="Today" />
        </div>
        <div className="h-screen w-full flex-col md:space-x-5 lg:flex lg:h-full lg:flex-row">
          <ToDo Today="Tomorrow" />
          <ToDo Today="This Week" />
        </div>
      </div>
    </div>
  );
};
