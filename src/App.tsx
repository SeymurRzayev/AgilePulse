import styles from "./App.module.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/Hooks";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { setLoggedUser } from "./redux/slices/authSlice";
import { ToastContainer } from 'react-toastify';
import AdminRouter from "./router/AdminRouter";
import { Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      dispatch(setLoggedUser(parsedUser));
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div className="mainContent">
        <Routes>
          {user?.role === 'ADMIN' ? (
            <Route path="/admin/*" element={<AdminRouter />} />
          ) : (
            <Route path="*" element={<AppRouter />} />
          )}
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
