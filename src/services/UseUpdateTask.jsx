// Libraries;
import axios from "axios";

// Componenets;
import { useTasks } from "@/context/TaskContext";

export const UseUpdateTask = () => {
  const URL = "https://strapi.arvanschool.ir/api/to-dos";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsImlhdCI6MTc1NTM0Njc1NSwiZXhwIjoxNzU3OTM4NzU1fQ.eylik0-zX0TjRg2jDhZwjpWvc3Su2royip9NV4oIYkI";
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
