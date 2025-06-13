// components;
import { BurgerIcon } from "@/components/BurgerIcon";
import { Menu } from "../components/Menu";

export const Home = () => {
  return (
    <div className=" px-5 py-4 gap-6 bg-gray-300 lg:bg-[#fff] min-h-screen grid grid-rows-[auto_1fr] lg:grid-rows-[1fr] ">
      {/* <Burger Icon /> */}
      <BurgerIcon />
      <div className="flex gap-6 ">
        {/* // Menu.... */}
        <Menu />

        {/* Main Content */}
        <main className=" grid w-full bg-transparent place-content-center rounded-[50px] lg:bg-gray-300">
          <div className="max-w-[500px] space-y-14 sm:space-y-16 text-center bg-gray-300">
            <h3 className="font-oswald text-3xl sm:text-4xl font-normal text-black">
              Wellcome to ToDoPy
            </h3>
            <p className="font-notoSans text-[15px] leading-6 font-normal">
              A to-do app is a simple, user-friendly digital tool designed to
              help individuals and teams organize tasks and manage their daily
              activities efficiently. Users can create, edit, and prioritize
              tasks, set deadlines or reminders, categorize items, and track
              their progress, all within an intuitive and accessible interface.
              These apps are essential for improving productivity, reducing
              stress, and ensuring that important responsibilities are not
              forgotten.
            </p>
            {/* Button */}
            <button className="font-oswald bg-green-100 h-[42px] max-w-[218px] w-full cursor-pointer rounded-[10px] text-xl sm:text-[24px] font-normal transition-all duration-300 hover:translate-y-1">
              Go to tasks
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
