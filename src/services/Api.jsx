import axios from "axios";

export const SignUpForm = async (formData) => {
  const URL = "https://strapi.arvanschool.ir/api/auth/local/register";
  try {
    const res = await axios.post(
      URL,
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
