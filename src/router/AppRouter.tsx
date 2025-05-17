import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import TrainingsPage from "../pages/Training/TrainingsPage";
import PersonalCabinet from "../pages/PersonalCabinet";
import { Home } from "../pages/Home/Home";

import ScrumSection from "../pages/Training/ScrumSection/ScrumSection";
const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/trainings/scrum" element={<ScrumSection />} />
      <Route path="/personal-cabinet" element={<PersonalCabinet />} />
    </Routes>
  );
}

export default AppRouter;

// const AppRouter: FC = () => {
//   return (
//     <Routes>
//       <Route path="/sign-up" element={<SignUp />} />
//       <Route path="/sign-in" element={<SignIn />} />
//       <Route path="/reset-password" element={<ResetPassword />} />
//       <Route path="/trainings" element={<TrainingsPage />} />
//     </Routes>
//   )

// };
