// State
import { useState } from "react";

// Components;
import { Input } from "./Inpput";
import { ToDoImg } from "./ToDoImg";

// Icons;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  const [isShow, setIsShow] = useState("false");

  const showHideHander = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
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
            <Input placeholder={"First Name"} type={"text"} />
            <Input placeholder={"Last Name"} type={"text"} />
            <Input placeholder={"E-mail address"} type={"text"} />
            <div className="focus-within:ring-green-100 flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2">
              <input type={isShow ? "password" : "text"} placeholder="password" className="accent-green-100 w-full border-0 outline-0"/>
              <div className="cursor-pointer" onClick={showHideHander}>
                {isShow ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <Input placeholder={"Re-enter the password"} type={"password"} />
            {/* Button */}
            <button type="submit" className="bg-green-100 font-inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px">
              Sign up
            </button>
          </form>
          <p className="font-notoSans mt-6 text-[15px] font-medium text-black">
            Already have an account? Sign In
          </p>
        </main>
      </div>
    </div>
  );
};

export default Register;
