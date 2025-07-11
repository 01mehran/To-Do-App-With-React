//Components;
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const Today = () => {
  return (
    <div className="flex h-screen flex-col lg:flex-row gap-6 px-5 py-4">
      <Menu />
      <div className="h-full w-full">
        <ToDo context="Today" num={8} Today="Today" />
      </div>
    </div>
  );
};
