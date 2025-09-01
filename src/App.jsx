// Route & Routes;
import { Routes, Route } from "react-router-dom";

// Components;
import { Started } from "./pages/Started";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Upcoming } from "./pages/Upcoming";
import { Today } from "./pages/Today";
import { Calendar } from "./pages/Calendar";
import { NotFound } from "./pages/NotFound";
import { NewTask } from "./pages/NewTask";
import { PassShowHideProvider } from "./Context/PassShowHideContext";
import { TaskProvider } from "./context/TaskContext";

export const App = () => {
  return (
    <PassShowHideProvider>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Started />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/today" element={<Today />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/newTask" element={<NewTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </PassShowHideProvider>
  );
};
