import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import TrainingsPage from "../pages/Training/TrainingsPage";
import { Home } from "../pages/Home/Home";
import PersonalCabinet from "../pages/PersonalCabinet";
const AppRouter: FC = () => {
return (
 <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
     <Route path="/trainings" element={<TrainingsPage />} />
     <Route path="/personal-cabinet" element={<PersonalCabinet />} />
 </Routes>
)
};
export default AppRouter;
