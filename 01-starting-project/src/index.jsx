import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
const mainTitle = 'Time to get started!';
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App mainTitle={mainTitle} />);
