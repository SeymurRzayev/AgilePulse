import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/Auth/SignUp/SignUp";
import SignIn from "../pages/Auth/SignIn/SignIn";
import ForgetPassword from "../pages/Auth/ForgetPassword/ForgetPassword";
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
import Suggestions from "../pages/Suggestions/Suggestions"; 
import Complaint from "../pages/Suggestions/Complaint";

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/auth/otp" element={<OTP />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/library" element={<Library />} />
      <Route path="/library/detail" element={<LibraryDetails />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/details" element={<ArticleDetails />} />
      <Route path="/trainings/scrum" element={<ScrumSection />} />
      <Route path="/personal-cabinet" element={<PersonalCabinet />} />
      <Route path="/FAQ" element={<Faq/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/suggestions" element={<Suggestions />} /> 
      <Route path='/complaint' element={<Complaint />} />
    </Routes>
  );
}

export default AppRouter;