// Route & Routes;
import { Routes, Route } from "react-router-dom";

// Components;
import { Started } from "./pages/Started";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Upcoming } from "./pages/Upcoming";
import { Today } from "./pages/Today";
import { NotFound } from "./pages/NotFound";
import { NewTask } from "./pages/NewTask";
import { PassShowHideProvider } from "./context/PassShowHideContext";
import { TaskProvider } from "./context/TaskContext";
import { Work } from "./pages/Work";
import { Personal } from "./pages/Personal";
import { Study } from "./pages/Study";

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
          <Route path="/newTask" element={<NewTask />} />
          <Route path="/work" element={<Work />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/study" element={<Study />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TaskProvider>
    </PassShowHideProvider>
  );
};
