import styles from "./App.module.css";
import Footer from "./layout/Footer/Footer";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className={styles.app}>
     
      <div className="mainContent">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
