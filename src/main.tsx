// Entry point — mounts the React app into index.html's #root div
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
