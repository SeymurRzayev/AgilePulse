import styles from "./App.module.css";
// import Footer from "./layout/Footer/Footer";
// import Navbar from "./layout/Navbar/Navbar";
// import AppRouter from "./router/AppRouter";
import PersonalCabinet from "./pages/PersonalCabinet"
function App() {
  return (
    <div className={styles.app}>
      {/* <Navbar />
      <div className="mainContent">
        <AppRouter />
      </div>
      <Footer /> */}
  <PersonalCabinet />
    </div>
  );
}

export default App;
