import type { FC} from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
const AppRouter: FC = () => {
return (
 <Routes>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
 </Routes>
)
};
export default AppRouter;
