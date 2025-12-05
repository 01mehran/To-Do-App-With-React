// Libraries;
import axios from "axios";

// Componenets;
import { useTasks } from "@/context/TaskContext";

export const UseUpdateTask = () => {
  const URL = "https://strapi.arvanschool.ir/api/to-dos";
  const TOKEN = localStorage.getItem("token");
  const { tasks, setTasks } = useTasks();

  const updateTask = async (docId, title, dueTimeStamp, type) => {
    try {
      await axios.put(
        `${URL}/${docId}`,
        { data: { title, dueDate: dueTimeStamp, type } },
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        },
      );

      const updatedTasks = tasks.map(task => {
        if (task.documentId === docId) {
          return {
            ...task,
            title,
            dueDate: dueTimeStamp,
            type
          };
        }
        return task;
      });

      setTasks(updatedTasks);
    } catch (err) {
      throw err;
    }
  };
  return updateTask;
};
