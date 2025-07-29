import { Route, Routes } from "react-router-dom"
import AdminPanel from "../layout/Admin/AdminPanel"
import Dashboard from "../pages/Admin/MenuItemsContent/Dashboard"
import Users from "../pages/Admin/MenuItemsContent/Users"
import Projects from "../pages/Admin/MenuItemsContent/Projects"
import Tasks from "../pages/Admin/MenuItemsContent/Tasks"
import NotificationCenter from "../pages/Admin/MenuItemsContent/NotificationCenter"
import Groups from "../pages/Admin/MenuItemsContent/Groups"
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
import AdminAbout from "../components/Admin/AboutPage/AdminAbout";
import AdminFaq from "../components/Admin/HeaderFooterPage/AdminFaq";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<AdminPanel />}>
                <Route path="dashboard">
                    <Route index element={<Dashboard />} />
                    <Route path="main-page" element={<AdminSections pageType={AdminPageType.Main} />} />
                    <Route path="main-page/library" element={<AdminLibraryAndArticles />} />
                    <Route path="main-page/quotes" element={<AdminQuotes />} />
                    <Route path="main-page/articles" element={<AdminLibraryAndArticles />} />
                    <Route path="main-page/partners" element={<AdminPartners />} />
                    <Route path="header-footer" element={<AdminSections pageType={AdminPageType.HeaderAndFooter} />} />
                    <Route path="header-footer/faq" element={<AdminFaq />} />
                    <Route path="trainings-page" element={<AdminSections pageType={AdminPageType.Trainings} />} />
                    <Route path="trainings-page/categories" element={<AdminCategories />} />
                    <Route path="trainings-page/trainers" element={<AdminTrainers />} />
                    <Route path="trainings-page/podcasts" element={<AdminPodcasts />} />
                    <Route path="trainings-page/quizs" element={<AdminQuizs />} />
                    <Route path="trainings-page/courses" element={<AdminCourses />} />
                    <Route path="about-page" element={<AdminAbout />} />
                </Route>
                <Route path="users" element={<Users />} />
                <Route path="projects" element={<Projects />} />
                <Route path="tasks" element={<Tasks />} />
                <Route path="groups" element={<Groups />} />
                <Route path="notificationSystem" element={<NotificationCenter />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter