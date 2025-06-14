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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Started />} />
      <Route path="/Login" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/UpComing" element={<Upcoming />} />
      <Route path="/Today" element={<Today />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
