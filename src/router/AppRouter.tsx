import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import TrainingsPage from "../pages/Training/TrainingsPage";
import { Home } from "../pages/Home/Home";
import Faq from "../pages/FAQ/Faq";
import ScrumSection from "../pages/Training/ScrumSection/ScrumSection";
import PersonalCabinet from "../pages/PersonalCabinet/PersonalCabinet";
import Library from "../pages/Library/Library";
import LibraryDetails from "../pages/Library/LibraryDetails";
import Articles from "../pages/Articles/Articles";
import ArticleDetails from "../pages/Articles/ArticleDetails";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import About from "../pages/About/About";
import OTP from "../pages/Auth/OTP/OTP";
import Suggestions from "../pages/UserOpinions/Suggestions";
import Certificate from "../pages/Certificate/Certificate";
import ProtectedRoute from "./ProtectedRoute";


const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/auth/otp/:email" element={<OTP />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/detail/:id" element={<ProtectedRoute />}>
        <Route path="/library/detail/:id" element={<LibraryDetails />} />
      </Route>
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/details/:id" element={<ArticleDetails />} />
      <Route path="/trainings/scrum" element={<ScrumSection />} />
      <Route path="/personal-cabinet" element={<ProtectedRoute />}>
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
      </Route>
      <Route path="/FAQ" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path='/complaint' element={<Suggestions />} />
      <Route path="/exams" element={<Certificate studentName="Shahana Khalilova" />} />
    </Routes>
  );
}

export default AppRouter;