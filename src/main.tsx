import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

import "./components/typescript/fake-database";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
