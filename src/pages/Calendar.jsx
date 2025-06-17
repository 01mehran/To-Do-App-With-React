// Components
import { Menu } from "@/components/Menu";

export const Calendar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-5 h-screen overflow-hidden">
      {/* Menu */}
      <Menu />
      <div className="w-full flex flex-col h-full">
        <header className="flex flex-col space-y-3 items-center w-full sm:flex-row justify-between">
          <div className="space-y-3">
            {/* Date */}
            <h1 className="font-oswald text-2xl font-normal tracking-wider">
              17 October 2023
            </h1>
            <article className="bg-gray-400 grid grid-cols-1 sm:grid-cols-3 sm:gap-2 rounded-[7px] p-[4px] font-notoSans">
              {/* Days */}
              <span className="bg-gray-500 font-semibold text-center cursor-pointer hover:bg-gray-300 rounded-[5px] px-2 py-1 text-xs">
                Day
              </span>
              <span className="cursor-pointer hover:bg-gray-300 rounded-[5px] bg-white px-2 py-1 text-xs font-semibold text-center">
                Week
              </span>
              <span className="cursor-pointer hover:bg-gray-300 rounded-[5px] bg-white px-2 py-1 text-xs font-semibold text-center">
                Month
              </span>
            </article>
          </div>
          {/* Add Button */}
          <button className="font-notosans font-400 cursor-pointer rounded-[5px] border-[1px] border-gray-100 px-3 py-1 text-[12px] transition-all duration-200 text-black/40 hover:shadow-sm shadow-gray-100">
            Add Event
          </button>
        </header>
        {/* Main Contents */}
        <main className="mt-8 border-[1px] border-gray-100 flex-1 w-full rounded-[30px] overflow-hidden"></main>
      </div>
    </div>
  );
};
