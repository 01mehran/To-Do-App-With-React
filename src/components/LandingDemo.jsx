// Started Image; 
import { ToDoImg } from "./ToDoImg";

export const LandingDemo = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <section className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
      {/* To-Do Image */}
        <ToDoImg />
        <main className="sm:12 flex min-h-[600px] w-full flex-col items-center justify-center space-y-5 rounded-[40px] bg-white px-8 sm:max-w-[480px] md:px-20">
          <h3 className="font-oswald text-[28px] md:text-[36px]">ToDo Py</h3>
          <section className="font-notoSans space-y-7">
            {/* Text */}
            <p className="text-base leading-[1.5rem] text-black">
              Stay Organized, Get Things Done: Your Ultimate To-Do List App.
              <br />A todo list app is a digital task management tool designed
              to help users organize and prioritize their daily activities and
              responsibilities.
            </p>
            {/* Button */}
            <button type="button" className="bg-green-100 font-inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px">Get Started</button>
            <p className="font-notoSans text-center text-[15px] font-medium mt-7">Already have an account? Sign In</p>
          </section>
        </main>
      </section>
    </div>
  );
};
