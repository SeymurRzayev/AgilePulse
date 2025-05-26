import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import './assets/styles/stylesheet.css'
import App from "./App.tsx";
import { Provider } from "react-redux";
import { Store } from "./redux/store/Store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
