// Libraries;
import axios from "axios";

import { createContext, useContext, useState } from "react";

// Componenets;
import { showErrorToast } from "@/components/Toast";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

  const [tasks, setTasks] = useState([]);
  // const [isLoading, setIsLoading] = useState(null);
  const [loadingIds, setLoadingIds] = useState([]);
  
  const HandleDeleteTask = async (docId) => {
   
    const URL = `https://strapi.arvanschool.ir/api/to-dos/${docId}`;
    const TOKEN =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsImlhdCI6MTc1NTM0Njc1NSwiZXhwIjoxNzU3OTM4NzU1fQ.eylik0-zX0TjRg2jDhZwjpWvc3Su2royip9NV4oIYkI";
    
      // setIsLoading(docId);
    setLoadingIds((prev) => [...prev, docId]);
    try {
      await axios.delete(URL, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      });

      setTasks((prev) => prev.filter((tsk) => tsk.documentId !== docId));
    } catch (err) {
      console.error(err);
      showErrorToast(`Something went wrong!`);
    } finally {
      // setIsLoading(null);
      setLoadingIds((prev) => prev.filter((id) => id !== docId));
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, HandleDeleteTask, loadingIds }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
