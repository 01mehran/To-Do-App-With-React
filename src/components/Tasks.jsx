// Icons;
import upComingIcon from "@icons/UpcomIcon.svg";
import ListIcon from "@icons/listIcon.svg";
import { AiOutlinePlus } from "react-icons/ai";

// Libraries;
import { NavLink } from "react-router-dom";

export const Tasks = ({ isMenuCollapse, num, num2 }) => {
  return (
    <section>
      <div>
        <h3 className="font-oswald text-[15px] font-semibold">Tasks</h3>
        <section className="mt-2 flex flex-col gap-4 px-3">
          {/* New task */}
          <NavLink
            to={"/newTask"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center justify-between rounded-2xl py-1 transition-all duration-300 hover:px-2 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <div className="flex items-center gap-1.5">
              <span>
                <AiOutlinePlus />
              </span>
              <span className="font-notoSans text-sm font-medium text-black/70">
                New Task
              </span>
            </div>
          </NavLink>

          {/* Upcoming */}
          <NavLink
            to={"/upcoming"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center justify-between rounded-2xl py-1 transition-all duration-300 hover:px-2 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <div className="flex items-center gap-1.5">
              <img src={upComingIcon} alt="upComingIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                Upcoming
              </span>
            </div>
            <span
              className={`text font-notoSans w-7 rounded-full bg-gray-200 text-center text-[11px] text-black/70 ${isMenuCollapse ? "" : "hidden"}`}
            >
              {num}
            </span>
          </NavLink>

          {/* Today */}
          <NavLink
            to={"/today"}
            className={({ isActive }) =>
              `flex cursor-pointer items-center justify-between rounded-2xl py-1 transition-all duration-300 hover:px-2 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <div className="flex items-center gap-1.5">
              <img src={ListIcon} alt="ListIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                Today
              </span>
            </div>
            <span
              className={`text font-notoSans w-7 rounded-full bg-gray-200 text-center text-[11px] text-black/70 ${isMenuCollapse ? "" : "hidden"}`}
            >
              {num2}
            </span>
          </NavLink>
        </section>
      </div>
    </section>
  );
};
