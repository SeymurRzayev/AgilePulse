import styles from "./App.module.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./layout/Navbar/Navbar";
function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className="mainContent">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
