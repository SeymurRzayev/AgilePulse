import styles from "./App.module.css";
import { useAppDispatch } from "./redux/hooks/Hooks";
import AppRouter from "./router/AppRouter";
import { useEffect } from "react";
import { setLoggedUser } from "./redux/slices/authSlice";

function App() {
  const dispatch = useAppDispatch();
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
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
