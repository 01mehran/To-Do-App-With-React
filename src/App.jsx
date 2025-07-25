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
import { PassShowHideProvider } from "./components/PassShowHideContext";

export const App = () => {
  return (
    <PassShowHideProvider>
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/today" element={<Today />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PassShowHideProvider>
  );
};
