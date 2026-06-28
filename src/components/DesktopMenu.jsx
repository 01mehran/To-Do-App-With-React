// Components;
import { Lists } from "./Lists";
import { Tasks } from "./Tasks";

// Link;
import { Link } from "react-router-dom";

// Icons;
import serachIcon from "@icons/search_icon.svg";
import settingIcon from "@icons/settingIcon.png";
import LogoutIcon from "@icons/logoutIcon.svg";

export const DesktopMenu = ({
  isMenuCollapse,
  toggleMenuCollapse,
  num,
  num2,
}) => {
  return (
    //Container;
    <div
      className={`sticky top-4 h-[95vh] w-full overflow-hidden bg-gray-300 py-4 text-lg transition-all duration-200 ease-in-out ${isMenuCollapse ? "max-w-87.5 rounded-[50px] px-10" : "max-w-50 rounded-[30px] px-5"} hidden lg:block`}
    >
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1
          className={`font-oswald font-semibold1 text-4xl ${isMenuCollapse ? "" : "text-[25px]"}`}
        >
          <Link to="/home">Menu</Link>
        </h1>
        <button
          onClick={toggleMenuCollapse}
          className="flex h-6 w-6 cursor-pointer flex-col items-center justify-evenly"
        >
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex h-full flex-col justify-evenly">
        {/* Search Box */}
        <div className="flex h-9 items-center rounded-full bg-gray-200 pl-4">
          <img src={serachIcon} alt="searchIcon" className="max-w-4" />
          <input
            type="text"
            className="flex-1 rounded-full border-0 px-3 outline-0"
            placeholder="Serach..."
          />
        </div>

        {/* Tasks */}
        <Tasks num={num} num2={num2} isMenuCollapse={isMenuCollapse} />

        {/* Lists */}
        <Lists />

        {/* footer */}
        <footer className="pb-4">
          <div className="flex flex-col gap-2">
            <article className="group flex cursor-pointer items-center space-x-4">
              <img
                src={settingIcon}
                alt="settingIcon"
                className="rounded-full transition-all duration-300 group-hover:bg-green-200 group-hover:p-1"
              />
              <p className="font-notoSans text-lg text-black/70 group-hover:text-green-200">
                Settings
              </p>
            </article>
            <article className="group flex cursor-pointer items-center space-x-4">
              <img
                src={LogoutIcon}
                alt="settingIcon"
                className="group-hover:bg-red rounded-full transition-all duration-300 group-hover:p-1"
              />
              <p className="font-notoSans group-hover:text-red text-lg text-black/70">
                Log Out
              </p>
            </article>
          </div>
        </footer>
      </main>
    </div>
  );
};
