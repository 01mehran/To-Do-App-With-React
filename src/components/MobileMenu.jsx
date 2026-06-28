// components;
import { Lists } from "./Lists";
import { Tasks } from "./Tasks";

// Link;
import { Link } from "react-router-dom";

// Icons;
import serachIcon from "@icons/search_icon.svg";
import settingIcon from "@icons/settingIcon.png";
import LogoutIcon from "@icons/logoutIcon.svg";

export const MobileMenu = ({ isMenuOpen, toggleMenu, onLogOut }) => {
  return (
    <>
      {/* Menu Toggle Button; */}
      <article className="flex items-baseline-last justify-between">
        <button
          onClick={toggleMenu}
          className="relative z-50 mb-5 flex h-6 w-6 cursor-pointer flex-col items-center justify-evenly lg:hidden"
        >
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
          <span className="h-0.75 w-full rounded-xs bg-black"></span>
        </button>
        <h3 className="font-oswald text-2xl font-medium lg:hidden">
          To-Do App
        </h3>
      </article>

      <div
        className={`rounded-rb-[50px] fixed top-0 left-0 z-100 flex h-full w-62.5 flex-col justify-evenly rounded-tr-[30px] bg-gray-300 px-5 py-4 shadow-lg shadow-gray-500 transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1
            className={`font-oswald font-semibold1 text-4xl ${isMenuOpen ? "" : "text-[25px]"}`}
          >
            <Link to="/home">Menu</Link>
          </h1>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="hover:text-red cursor-pointer text-4xl transition-all duration-300"
          >
            &times;
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
          <Tasks isMenuOpen={isMenuOpen} />

          {/* Lists */}
          <Lists />

          {/* footer */}
          <footer>
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
                <p
                  onClick={onLogOut}
                  className="font-notoSans group-hover:text-red text-lg text-black/70"
                >
                  Log Out
                </p>
              </article>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};
