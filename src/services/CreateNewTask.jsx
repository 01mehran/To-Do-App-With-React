// Libraries;
import axios from "axios";

export const CreateNewTask = async (title, dueTimeStamp, type) => {
  const URL = "https://strapi.arvanschool.ir/api/to-dos";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzUxODA3NDI5LCJleHAiOjE3NTQzOTk0Mjl9.zvLCd7W3iKZ9jR-vS6DZRxAuQ3RCOWBSI7juajg1k94'";
  try {
    const res = await axios.post(
      URL,
      {
        data: {
          title,
          dueDate: dueTimeStamp,
          type,
        },
      },
      {
        headers: {
          Authorization: TOKEN,
          "Content-Type": "application/json",
        },
      },
    );
    console.log(res.data.data);
  } catch (err) {
    throw err;
  }
};
