// Icons;
import plusIcon from "@icons/plusIcon.svg";
import { NavLink } from "react-router-dom";

export const Lists = () => {
  return (
    <section>
      <div>
        <h3 className="font-oswald text-[15px] font-semibold">Lists</h3>

        <div className="mt-2 flex flex-col gap-3 px-2">
          {/* Work */}
          <NavLink
            to={"/work"}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 rounded-full bg-gray-600 px-1 py-1.5 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <span className="bg-red h-4 w-6 rounded-full"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Work
            </p>
          </NavLink>

          {/* Personal */}
          <NavLink
            to={"/personal"}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 rounded-full bg-gray-600 px-1 py-1.5 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <span className="h-4 w-6 rounded-full bg-green-200"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Personal
            </p>
          </NavLink>

          {/* Study */}
          <NavLink
            to={"/study"}
            className={({ isActive }) =>
              `flex items-center space-x-2.5 rounded-full bg-gray-600 px-1 py-1.5 ${isActive ? "bg-neutral-200 px-2" : ""}`
            }
          >
            <span className="bg-blue h-4 w-6 rounded-full"></span>
            <p className="font-notoSans text-sm font-medium text-black/70">
              Study
            </p>
          </NavLink>

          {/* Add new  list */}
          <article className="flex cursor-pointer items-center space-x-2.5 rounded-full px-1 py-1.5 hover:shadow-sm">
            <img src={plusIcon} alt="plusicon" className="w-[1rem]" />
            <p className="font-notoSans text-[ 13px] font-light text-black/70">
              Add new list
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
