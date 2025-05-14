import styles from "./App.module.css";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";
import Kabinet from "./pages/Kabinet";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className="mainContent">
        <AppRouter />
      </div>
      <Footer />
      {/* <Kabinet /> */}
    </div>
  );
}

export default App;
