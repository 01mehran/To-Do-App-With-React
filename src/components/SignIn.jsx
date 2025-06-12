// Components;
import { ToDoImg } from "./ToDoImg";
import { SocialMediaIcons } from "./SocialMediaIcons";

// Icons;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// States;
import { useState } from "react";


export const SignIn = () => {

  const [isShow, setIsShow] = useState("false");

  const showHideHander = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
       {/* To-Do Image */}
        <ToDoImg />

        <main className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-[40px] bg-white px-6 sm:max-w-[480px] sm:px-10 md:px-20">
          <div className="w-full">
            <h2 className="font-oswald mb-8 text-left text-4xl font-bold">
              Sign in
            </h2>
          </div>

          {/* <Form /> */}
          <form className="w-full space-y-4">
            <input type="text" placeholder="Enter your email" className="focus:ring-green-100 accent-green-100 w-full rounded-[7px] border border-black/60 px-2 py-1 outline-0 focus:border-transparent focus:ring-2 focus:outline-none" />
            <div className="focus-within:ring-green-100 flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2">
              <input type={isShow ? "password" :  "text"} placeholder="password" className="accent-green-100 w-full border-0 outline-0" />
              <div className="cursor-pointer" onClick={showHideHander}>
                {isShow ?  <FaEyeSlash />  : <FaEye />}
              </div>
            </div>
            {/* Button */}
            <button type="button" className="bg-green-100 font-inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px" >
              Sign in
            </button>
          </form>
          {/* Divided Or */}
          <div className="relative my-6 flex w-full items-center">
            <span className="bg-gray-100 h-px flex-grow"></span>
            <span className="mx-4 text-black/52">Or</span>
            <span className="bg-gray-100 h-px flex-grow"></span>
          </div>

          {/* Social Media Icons */}
          <SocialMediaIcons />

          <p className="font-inder mt-6 text-[15px] font-medium text-black">
            Don't have an account? Sign up
          </p>
        </main>
      </section>
    </div>
  );
};
