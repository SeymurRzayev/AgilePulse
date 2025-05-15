import styles from "./App.module.css";
import AppRouter from "./router/AppRouter";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className="mainContent">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
