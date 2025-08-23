// Icons;
import upComingIcon from "@icons/UpcomIcon.svg";
import ListIcon from "@icons/listIcon.svg";
import CalendarIcon from "@icons/calendaricon.svg";
import NoteIcon from "@icons/NoteIcon.svg";
import { AiOutlinePlus } from "react-icons/ai";
// Link
import { Link } from "react-router-dom";

export const Tasks = ({ isMenuCollapse, num }) => {
 
  return (
    <section>
      <div>
        <h3 className="font-oswald text-[15px] font-semibold">Tasks</h3>
        <section className="mt-2 flex flex-col gap-4 px-3">
          {/* New task */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <span>
                <AiOutlinePlus />
              </span>
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/newTask">New Task</Link>
              </span>
            </div>
          </article>

          {/* Upcoming */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={upComingIcon} alt="upComingIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/upcoming">Upcoming</Link>
              </span>
            </div>
            <span
              className={`text font-notoSans w-7 rounded-full bg-gray-200 text-center text-[11px] text-black/70 ${isMenuCollapse ? "" : "hidden"}`}
            >
              {num}
            </span>
          </article>

          {/* Today */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={ListIcon} alt="ListIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/today">Today</Link>
              </span>
            </div>
            <span
              className={`text font-notoSans w-7 rounded-full bg-gray-200 text-center text-[11px] text-black/70 ${isMenuCollapse ? "" : "hidden"}`}
            >
              8
            </span>
          </article>

          {/* Calender */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={CalendarIcon} alt="CalendarIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/calendar">Calendar</Link>
              </span>
            </div>
          </article>

          {/* Sticky Wall */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={NoteIcon} alt="NoteIcon" className="w-4" />
              <span className="font-notoSans pl-1 text-sm font-medium text-nowrap text-black/70">
                Sticky Wall
              </span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};
