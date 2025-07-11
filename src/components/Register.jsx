// State;
import { useState } from "react";

// Components;
import { Input } from "./Inpput";
import { ToDoImg } from "./ToDoImg";

// Icons;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

//Link;
import { Link } from "react-router-dom"

export const Register = () => {
  // States;
  const [isShow, setIsShow] = useState("false");

  // Functions;
  const showHideHander = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-5 md:py-0 ">
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-3 md:flex-row min-h-screen">
        {/* To-Do Image */}
        <ToDoImg />
        <main className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-[40px] bg-white px-6 sm:max-w-[480px] sm:px-10 md:px-20">
          {/* Title */}
          <div className="w-full mb-7">
            <h2 className="font-oswald mb-8 text-left text-4xl font-bold">
              Sign up
            </h2>
          </div>
          {/* Form */}
          <form className="space-y-4">
            {/* Input Fields */}
            <Input placeholder={"UserName"} type={"text"} />
            <Input placeholder={"E-mail address"} type={"text"} />
            <div className="focus-within:ring-green-100 flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2">
              <input type={isShow ? "password" : "text"} placeholder="password" className="accent-green-100 w-full border-0 outline-0"/>
              <div className="cursor-pointer" onClick={showHideHander}>
                {isShow ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <Input placeholder={"Re-enter the password"} type={"password"} />
            {/* Button */}
            <button type="submit" className="bg-green-100 font-inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px">
              Sign up
            </button>
          </form>
          <p className="font-notoSans mt-6 text-[15px] font-medium text-black">
            Already have an account? <Link to="/login" className="hover:text-green-200">Sign In</Link> 
          </p>
        </main>
      </div>
    </div>
  );
};