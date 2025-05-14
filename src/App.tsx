import styles from "./App.module.css";
// import Footer from "./layout/Footer/Footer";
// import Navbar from "./layout/Navbar/Navbar";
// import AppRouter from "./router/AppRouter";

import Kabinet from "./pages/Kabinet";
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
