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
import AdminPanel from "../layout/Admin/AdminPanel";
import Users from "../pages/Admin/MenuItemsContent/Users";
import Projects from "../pages/Admin/MenuItemsContent/Projects";
import Tasks from "../pages/Admin/MenuItemsContent/Tasks";
import Groups from "../pages/Admin/MenuItemsContent/Groups";
import NotificationCenter from "../pages/Admin/MenuItemsContent/NotificationCenter";
import Dashboard from "../pages/Admin/MenuItemsContent/Dashboard";
import AdminLibraryAndArticles from "../components/Admin/MainPage/AdminLibraryAndArticles";
import AdminPartners from "../components/Admin/MainPage/AdminPartners";
import { AdminPageType } from "../config/sectionConfig";
import AdminSections from "../components/Admin/General/AdminSections";
import AdminCategories from "../components/Admin/Trainings/AdminCategories";
import AdminTrainers from "../components/Admin/Trainings/AdminTrainers";
import AdminQuotes from "../components/Admin/MainPage/AdminQuotes";
import AdminPodcasts from "../components/Admin/Trainings/AdminPodcasts";
import AdminQuizs from "../components/Admin/Trainings/AdminQuizs";
import AdminCourses from "../components/Admin/Trainings/AdminCourses";
import Exams from "../pages/Exam/Exams";
import AdminAbout from "../components/Admin/AboutPage/AdminAbout";



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
      <Route element={<ProtectedRoute />}>
        <Route path="/personal-cabinet" element={<PersonalCabinet />} />
        <Route path="/trainings" element={<TrainingsPage />} />
        <Route path="/trainings/scrum/:id" element={<ScrumSection />} />
        <Route path="/library/detail/:id" element={<LibraryDetails />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/exams" element={<Exams />} />
      </Route>

      <Route path="/FAQ" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/suggestions" element={<Suggestions />} />
      <Route path='/complaint' element={<Suggestions />} />

      {/* Admin panel */}
      <Route path="/admin/*" element={<AdminPanel />}>
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          <Route path="main-page" element={<AdminSections pageType={AdminPageType.Main} />} />
          <Route path="main-page/library" element={<AdminLibraryAndArticles />} />
          <Route path="main-page/quotes" element={<AdminQuotes />} />
          <Route path="main-page/articles" element={<AdminLibraryAndArticles />} />
          <Route path="main-page/partners" element={<AdminPartners />} />
          <Route path="trainings-page" element={<AdminSections pageType={AdminPageType.Trainings} />} />
          <Route path="trainings-page/categories" element={<AdminCategories />} />
          <Route path="trainings-page/trainers" element={<AdminTrainers />} />
          <Route path="trainings-page/podcasts" element={<AdminPodcasts />} />
          <Route path="trainings-page/quizs" element={<AdminQuizs />} />
          <Route path="trainings-page/courses" element={<AdminCourses />} />
          <Route path="about-page" element={<AdminAbout/>}/>
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="projects" element={<Projects />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="groups" element={<Groups />} />
        <Route path="notificationSystem" element={<NotificationCenter />} />
      </Route>

    </Routes>
  );
}

export default AppRouter;