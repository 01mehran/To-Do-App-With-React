import { Menu } from "../components/Menu";
import { ToDo } from "../components/ToDo";
import { BurgerIcon } from "../components/BurgerIcon";

export const Today = () => {
  return (
    <div className="flex gap-6 px-5 py-4">
      <div className="w-full">
        <BurgerIcon />
        <div className="flex gap-6">
          <Menu />
          <ToDo context="Today" num={8} Today="Today"/>
        </div>
      </div>
    </div>
  );
};
