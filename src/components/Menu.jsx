// State;
import { useState } from "react"

// Icons;
import serachIcon from "../assets/icons/search_icon.svg";
import settingIcon from "../assets/icons/settingIcon.png";
import LogoutIcon from "../assets/icons/logoutIcon.svg";

// Components;
import { Tasks } from "./Tasks";
import { Lists } from "./Lists";

// Link;
import { Link } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState("false");

  const menuHandler = () => {
    setIsOpen(!isOpen)

  }

  return (
    <div className={`bg-gray-300 sticky top-4 h-[95vh] w-full overflow-y-hidden py-6 text-lg transition-all duration-200 ease-in-out ${isOpen ? "max-w-[350px] rounded-[50px] px-10" : "max-w-[200px] rounded-[20px] px-5"} hidden lg:block`}>

    {/* Header */}
    <header className="flex items-center justify-between">
        <h1 className={`font-oswald font-semibold1 text-4xl ${isOpen ? "" : "text-[25px]"}`}> <Link to="/Home">Menu</Link></h1>
        <button onClick={menuHandler}  className="flex h-6 w-6 cursor-pointer flex-col items-center justify-evenly ">
            <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
            <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
            <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
            <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
        </button>
    </header>

    {/* Main Content */}
    <main>
      {/* Search Box */}
        <div className="bg-gray-200 mt-4 flex h-9 items-center rounded-full pl-4">
          <img src={serachIcon} alt="searchIcon" className="max-w-4" />
          <input
            type="text"
            className="flex-1 rounded-full border-0 px-3 outline-0"
            placeholder="Serach..."
          />
        </div>

        {/* Tasks */}
        <Tasks isOpen={isOpen}/>

        {/* Lists */}
        <Lists />

         {/* footer */}
      <footer className="mt-5">
        <div className="flex flex-col gap-2">
          <article className="group flex cursor-pointer items-center space-x-4">
            <img src={settingIcon}  alt="settingIcon"className="group-hover:bg-green-200 rounded-full transition-all duration-300 group-hover:p-1" />
            <p className="font-notoSans group-hover:text-green-200 text-lg text-black/70">Settings</p>
          </article>
          <article className="group flex cursor-pointer items-center space-x-4">
            <img  src={LogoutIcon}  alt="settingIcon" className="group-hover:bg-red rounded-full transition-all duration-300 group-hover:p-1"/>
            <p className="font-notoSans group-hover:text-red text-lg text-black/70">Log Out </p>
          </article>
        </div>
      </footer>
    </main>
    </div>
  )
}
     