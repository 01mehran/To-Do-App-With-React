// Icons;
import upComingIcon from "@/assets/icons/UpcomIcon.svg";
import ListIcon from "@/assets/icons/listIcon.svg";
import CalendarIcon from "@/assets/icons/calendaricon.svg";
import NoteIcon from "@/assets/icons/NoteIcon.svg";

// Link
import { Link } from "react-router-dom";

export const Tasks = ({isOpen}) => {
  
  return (
    <section className="mt-6">
      <div>
        <h3 className="font-oswald text-[15px] font-semibold">Tasks</h3>
        <section className="mt-2 flex flex-col gap-5 px-3">
          {/* Upcoming */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={upComingIcon} alt="upComingIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/UpComing">Upcoming</Link> 
              </span>
            </div>
            <span className={`bg-gray-200 text font-notoSans w-7 rounded-full text-center text-[11px] text-black/70 ${isOpen ? "" : "hidden"}`}>
              15+
            </span>
          </article>

          {/* Today */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={ListIcon} alt="ListIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
              <Link to="/Today">Today</Link>  
              </span>
            </div>
            <span className={`bg-gray-200 text font-notoSans w-7 rounded-full text-center text-[11px] text-black/70 ${isOpen ? "" : "hidden"}`}>
              8
            </span>
          </article>

          {/* Calender */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={CalendarIcon} alt="CalendarIcon" className="w-5" />
              <span className="font-notoSans text-sm font-medium text-black/70">
                <Link to="/Calendar">Calendar</Link>  
              </span>
            </div>
          </article>

          {/* Sticky Wall */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={NoteIcon} alt="NoteIcon" className="w-4" />
              <span className="font-notoSans pl-1 text-sm font-medium text-black/70 text-nowrap">
                Sticky Wall
              </span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};
