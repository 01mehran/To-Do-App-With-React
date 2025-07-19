// liberaries;
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Components;
import { Input } from "./Inpput";
import { ToDoImg } from "./ToDoImg";
import { ErrorMessage } from "./ErrorMessage";
import { Toast } from "./Toast";
import { showErrorToast, showSuccessToast } from "@/components/Toast";
import { SignUpForm } from "@/services/Api";
import { ValidateEmail } from "./ValidateEmail";

// Icons;
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const Register = () => {
  // States;
  const [isShow, setIsShow] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //-----> Functions;

  // ُShow?/Hide password;
  const showHideHander = () => {
    setIsShow(!isShow);
  };

  // Get inputs value;
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // -->2
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value
    // })
  };

  // Submit form;
  const handleSubmit = async (e) => {
    e.preventDefault();


    const errorValidation = formErrorValidation(formData);

    if (Object.keys(errorValidation).length > 0) {
      setErrors(errorValidation);
      return;
    }

    try {
      // Show Loadign icon;
      setIsLoading(true);
      const { jwt, user } = await SignUpForm(formData);

      // Save users data;
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("user", JSON.stringify(user));

      showSuccessToast(`sign up was successful`);
      // Go to login form;
      setTimeout(() => navigate("/login"), 1500);

      // Reset inputs;
      setFormData({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      });

      // Hide errors;
      setErrors({});
    } catch (err) {
      console.log(err);
      const errorMessage = err.response?.data?.error?.message;
      showErrorToast(errorMessage || "Email already taken");
    } finally {
      // Hide loadign icon;
      setIsLoading(false);
    }
  };

  //Check form validation;
  const formErrorValidation = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Enter your username";
    }

    if (!data.email.trim()) {
      errors.email = "Enter your email address";
    } else if (!ValidateEmail(data.email)) {
      errors.email = "Email is invalid!";
    }

    if (!data.password.trim()) {
      errors.password = "Enter your password!";
    } else if (data.password.length < 6) {
      errors.password = "Password mist be 6";
    }

    if (!data.repeatPassword.trim()) {
      errors.repeatPassword = "Enter your password again";
    } else if (data.password !== data.repeatPassword) {
      errors.repeatPassword = "password not match!";
    }

    return errors;
  };
  return (
    <div className="min-h-screen bg-gray-100 py-5 md:py-0">
      <div className="flex min-h-screen flex-col-reverse items-center justify-center gap-5 px-3 md:flex-row">
        {/* To-Do Image */}
        <ToDoImg />
        <main className="relative flex min-h-[600px] w-full flex-col items-center justify-center rounded-[40px] bg-white px-6 sm:max-w-[480px] sm:px-10 md:px-20">
          {/* Title */}
          <div className="mb-7 w-full">
            <h2 className="font-oswald mb-8 text-left text-4xl font-bold">
              Sign up
            </h2>
          </div>

          {/* Form */}
          <form className="relative w-full space-y-6" onSubmit={handleSubmit}>
            {/* username */}
            <div className="relative">
              <Input
                placeholder="UserName"
                type="text"
                name="username"
                value={formData.username}
                onHandleChange={handleChange}
              />
              <ErrorMessage error={errors.username} />
            </div>

            {/* email */}
            <div className="relative">
              <Input
                placeholder="E-mail address"
                type="text"
                name="email"
                value={formData.email}
                onHandleChange={handleChange}
              />
              <ErrorMessage error={errors.email} />
            </div>

            {/* password */}
            <div className="relative flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2 focus-within:ring-green-100">
              <input
                type={isShow ? "password" : "text"}
                placeholder="password"
                className="w-full border-0 accent-green-100 outline-0"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
              <div className="cursor-pointer" onClick={showHideHander}>
                {isShow ? <FaEye /> : <FaEyeSlash />}
              </div>
              <span
                className={`absolute bottom-[-20px] left-0 mt-3 text-sm text-red-600 opacity-0 ${errors.password && "opacity-100 transition duration-300"}`}
              >
                {errors.password}
              </span>
            </div>

            {/* repeatPassword */}
            <div className="relative">
              <Input
                placeholder="Re-enter the password"
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onHandleChange={handleChange}
              />
              <ErrorMessage error={errors.repeatPassword} />
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`font-inder block h-10 w-full cursor-pointer rounded-[10px] bg-green-100 py-2 text-base font-medium transition-all hover:translate-y-px ${isLoading && "pointer-events-none opacity-70"}`}
            >
              {isLoading ? (
                <div className="mx-auto h-5 w-5 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              ) : (
                "Sign up"
              )}
            </button>
          </form>

          <p className="font-notoSans mt-6 text-[15px] font-medium text-black">
            Already have an account?
            <Link to="/login" className="ml-1 hover:underline">
              Sign In
            </Link>
          </p>
        </main>
      </div>

      {/*Toast notification; */}
      <Toast />
    </div>
  );
};
