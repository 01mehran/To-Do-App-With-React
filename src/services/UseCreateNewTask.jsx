// Libraries;
import axios from "axios";
import { useTasks } from "@/context/TaskContext";

export const UseCreateNewTask = () => {
  const URL = "https://strapi.arvanschool.ir/api/to-dos";
  const TOKEN = localStorage.getItem("token");
  
  const { setTasks } = useTasks();
  const creatTask = async (title, dueTimeStamp, type) => {
    try {
      const sendData = await axios.post(
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
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        },
      );

      const getData = await axios.get(
        "https://strapi.arvanschool.ir/api/to-dos?pagination[page]=1&pagination[pageSize]=200",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        },
      );
      
      setTasks(getData.data.data);
    } catch (err) {
      throw err;
    }
  };

  return creatTask;
};
