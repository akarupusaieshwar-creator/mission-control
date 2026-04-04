import React, { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

export type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useLocalStorage<Theme>("mission-theme", "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🚀 Mission Control Dashboard</h1>

      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
}