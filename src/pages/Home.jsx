// components;
import { Menu } from "@/components/Menu";
import { showSuccessToast, Toast } from "@/components/Toast";

// libraries;
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      const user = JSON.parse(userData);
      showSuccessToast(`Welcom ${user.username}`);
    }
  }, []);

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] gap-6 bg-gray-300 px-5 py-4 lg:flex lg:bg-[#fff]">
      <Menu />
      {/* Main Content */}
      <main className="grid w-full place-content-center rounded-[50px] bg-transparent lg:bg-gray-300">
        <div className="max-w-[500px] space-y-14 bg-gray-300 text-center sm:space-y-16">
          <h3 className="font-oswald text-3xl font-normal text-black sm:text-4xl">
            Wellcome to ToDoPy
          </h3>
          <p className="font-notoSans text-[15px] leading-6 font-normal">
            A to-do app is a simple, user-friendly digital tool designed to help
            individuals and teams organize tasks and manage their daily
            activities efficiently. Users can create, edit, and prioritize
            tasks, set deadlines or reminders, categorize items, and track their
            progress, all within an intuitive and accessible interface. These
            apps are essential for improving productivity, reducing stress, and
            ensuring that important responsibilities are not forgotten.
          </p>
          {/* Button */}
          <Link to="/Upcoming">
            <button className="font-oswald h-[42px] w-full max-w-[218px] cursor-pointer rounded-[10px] bg-green-100 text-xl font-normal transition-all duration-300 hover:translate-y-1 sm:text-[24px]">
              Go to tasks
            </button>
          </Link>
        </div>
      </main>
      {/* Toast notification */}
      <Toast />
    </div>
  );
};
