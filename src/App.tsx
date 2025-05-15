import styles from "./App.module.css";

import AppRouter from "./router/AppRouter";
import Navbar from "./layout/Navbar/Navbar";

import Footer from "./layout/Footer/Footer";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className={styles.app}>
     
      <div className="mainContent">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
