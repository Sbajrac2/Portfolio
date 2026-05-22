// ============================================================
// App.jsx — Root component with dark/light theme management
// ============================================================

import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  // Check localStorage for saved theme preference, default to light
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply or remove the "dark" class on <html> whenever theme changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return <Home darkMode={darkMode} setDarkMode={setDarkMode} />;
}

export default App;
