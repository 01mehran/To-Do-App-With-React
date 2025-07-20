// Libararies;
import axios from "axios";

export const SignInRequest = async (formData) => {
  const URL = "https://strapi.arvanschool.ir/api/auth/local";
  try {
    const res = await axios.post(
      URL,
      {
        identifier: formData.email,
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
