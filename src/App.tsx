import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

function App() {
  return (
    <>
     <Routes>

    <Route path="/" element={<Header />}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/reset-password" element={<ResetPassword/>}/>
 </Routes>
    </>
  );
}

export default App;
