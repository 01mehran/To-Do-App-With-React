// components;
import { Lists } from "./Lists";
import { Tasks } from "./Tasks";

// Link;
import { Link } from "react-router-dom";

// Icons;
import serachIcon from "@icons/search_icon.svg";
import settingIcon from "@icons/settingIcon.png";
import LogoutIcon from "@icons/logoutIcon.svg";

export const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
    {/* Menu Toggle Button; */}
     <article className="flex justify-between items-baseline-last">
      <button onClick={toggleMenu} className="flex h-6 w-6 cursor-pointer flex-col items-center justify-evenly lg:hidden mb-5 z-50 relative">
        <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
        <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
        <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
        <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
      </button>
      <h3 className="text-2xl font-oswald font-medium lg:hidden">To-Do App</h3>
    </article>

      <div className={`fixed top-0 left-0 h-full w-[250px] rounded-tr-[30px]  bg-gray-300 shadow-lg shadow-gray-500 rounded-rb-[50px] flex flex-col justify-evenly px-5 py-4  z-100 transition-transform duration-300 ease-in-out lg:hidden ${ isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
       {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className={`font-oswald font-semibold1 text-4xl ${ isMenuOpen ? "" : "text-[25px]"}`}>
            <Link to="/home">Menu</Link>
          </h1>
          {/* Close Button */}
          <button onClick={toggleMenu} className="hover:text-red text-4xl cursor-pointer transition-all duration-300">
            &times;
          </button>
        </header>

        {/* Main Content */}
        <main className="h-full flex flex-col justify-evenly">

          {/* Search Box */}
          <div className="bg-gray-200 flex h-9 items-center rounded-full pl-4">
            <img src={serachIcon} alt="searchIcon" className="max-w-4" />
            <input type="text" className="flex-1 rounded-full border-0 px-3 outline-0" placeholder="Serach..."/>
          </div>

          {/* Tasks */}
          <Tasks isMenuOpen={isMenuOpen} />

          {/* Lists */}
          <Lists />

          {/* footer */}
          <footer>
            <div className="flex flex-col gap-2">
              <article className="group flex cursor-pointer items-center space-x-4">
                <img src={settingIcon} alt="settingIcon" className="group-hover:bg-green-200 rounded-full transition-all duration-300 group-hover:p-1"/>
                <p className="font-notoSans group-hover:text-green-200 text-lg text-black/70">
                  Settings
                </p>
              </article>
              <article className="group flex cursor-pointer items-center space-x-4">
                <img src={LogoutIcon} alt="settingIcon" className="group-hover:bg-red rounded-full transition-all duration-300 group-hover:p-1"/>
                <p className="font-notoSans group-hover:text-red text-lg text-black/70">
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
