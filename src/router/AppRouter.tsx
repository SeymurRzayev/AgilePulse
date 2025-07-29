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
import ProtectedRoute from "./ProtectedRoute";
import QuizPage from "../pages/Quiz/Quiz";
import ExamStartPage from "../pages/Exam/ExamStartPage";
import Exams from "../pages/Exam/Exams";
import AdminRouter from "./AdminRouter";



const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/auth/otp/:email" element={<OTP />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/library" element={<Library />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/details/:id" element={<ArticleDetails />} />

      {/* Protecded routing */}
      <Route element={<ProtectedRoute allowedRoles={['USER', 'ADMIN']} />}>
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/trainings/scrum/:id" element={<ScrumSection />} />
        <Route path="/library/detail/:id" element={<LibraryDetails />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/exams" element={<ExamStartPage />}>
          <Route path="standard" element={<Exams selectedExamType="standard" />} />
          <Route path="premium" element={<Exams selectedExamType="premium" />} />
        </Route>
      </Route>

      <Route path="/FAQ" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path='/complaint' element={<Suggestions />} />

      {/* Admin panel */}
      <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
        <Route path="/admin/*" element={<AdminRouter />} />
      </Route>

    </Routes>
  );
}

export default AppRouter;