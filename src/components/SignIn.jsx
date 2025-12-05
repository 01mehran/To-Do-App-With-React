// Libraries;
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components;
import { ToDoImg } from "./ToDoImg";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { ValidateEmail } from "./ValidateEmail";
import { ErrorMessage } from "./ErrorMessage";
import { SignInRequest } from "@/services/SignInRequest";
import { showErrorToast, Toast } from "./Toast";
import { PassShowHideContext } from "@/Context/PassShowHideContext";

// Icons;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { isShow, showHideHander } = useContext(PassShowHideContext);
  // Functions;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorValidation = formErrorValidation(formData);

    setErrors(errorValidation);
    if (Object.keys(errorValidation).length > 0) {
      return;
    }

    try {
      // Show loading icon;
      setIsLoading(true);
      const { jwt, user } = await SignInRequest(formData);

      // Save users data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/home");

      // Reset;
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.error?.message;
      showErrorToast(errorMessage || "Email or password incorrect");
    } finally {
      setIsLoading(false);
    }
  };
  const formErrorValidation = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = "Enter your email address";
    } else if (!ValidateEmail(data.email)) {
      errors.email = "Email is invalid!";
    }

    if (!data.password.trim()) {
      errors.password = "Enter your password!";
    } else if (data.password.length < 6) {
      errors.password = "Password must be 6";
    }

    return errors;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-5 md:py-0">
      <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-5 px-3 md:flex-row">
        {/* To-Do Image */}
        <ToDoImg />

        <main className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-[40px] bg-white px-6 sm:max-w-[480px] sm:px-10 md:px-20">
          <div className="w-full">
            <h2 className="font-oswald mb-8 text-left text-4xl font-bold">
              Sign in
            </h2>
          </div>

          {/* <Form /> */}
          <form className="relative w-full space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full rounded-[7px] border border-black/60 px-2 py-1 accent-green-100 outline-0 focus:border-transparent focus:ring-2 focus:ring-green-100 focus:outline-none"
                onChange={handleChange}
                value={formData.email}
                name="email"
              />
              <ErrorMessage error={errors.email} />
            </div>

            <div className="relative flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2 focus-within:ring-green-100">
              <input
                type={isShow ? "password" : "text"}
                placeholder="password"
                className="w-full border-0 accent-green-100 outline-0"
                onChange={handleChange}
                value={formData.password}
                name="password"
              />
              <div className="cursor-pointer" onClick={showHideHander}>
                {isShow ? <FaEye /> : <FaEyeSlash />}
              </div>
              <ErrorMessage error={errors.password} />
            </div>
            {/* Button */}
            <button
              type="submit"
              className={`font-inder block w-full cursor-pointer rounded-[10px] bg-green-100 py-2 text-base font-medium transition-all hover:translate-y-px ${isLoading && "pointer-events-none opacity-70"}`}
            >
              {isLoading ? (
                <div className="mx-auto h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          {/* Divided Or */}
          <div className="relative my-6 flex w-full items-center">
            <span className="h-px flex-grow bg-gray-100"></span>
            <span className="mx-4 text-black/52">Or</span>
            <span className="h-px flex-grow bg-gray-100"></span>
          </div>

          {/* Social Media Icons */}
          <SocialMediaIcons />

          <p className="font-inder mt-6 text-[15px] font-medium text-black">
            Don't have an account?
            <Link to="/signup" className="ml-1 hover:underline">
              Sign up
            </Link>
          </p>
        </main>
      </section>
      {/* taost notification */}
      <Toast />
    </div>
  );
};
