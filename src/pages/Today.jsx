//Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const Today = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-5 py-4">
      <Menu />
      <ToDo context="Today" num={8} Today="Today" />
    </div>
  );
};
