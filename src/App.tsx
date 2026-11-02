import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DailyQuestions from "./components/DailyQuestions";
import ConsistencyTracker from "./components/ConsistencyTracker";
import ContestFeed from "./components/ContestFeed";
import CodingTimetable from "./components/CodingTimetable";
import AIChatBox from "./components/AIChatBox";
import FloatingAIBubble from "./components/FloatingAIBubble";
import ProgressChart from "./components/ProgressChart";
import ExportButton from "./components/ExportButton";
import LoginPage from "./components/LoginPage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [page, setPage] = useState("Dashboard");
  const [user, setUser] = useLocalStorage("user", "");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  if (!user) return <LoginPage setUser={setUser} />;

  const renderPage = () => {
    if (page === "Dashboard") {
      return (
        <div className="grid">
          <ProgressChart />
          <DailyQuestions />
          <ContestFeed />
          <CodingTimetable />
          <ConsistencyTracker />
          <ExportButton />
        </div>
      );
    }

    if (page === "Questions") return <DailyQuestions />;
    if (page === "Contests") return <ContestFeed />;
    if (page === "Coding Plan") return <CodingTimetable />;
    if (page === "Consistency") return <ConsistencyTracker />;
    if (page === "AI") return <AIChatBox />;

    return (
      <div className="card" role="status">
        <h2>Page not found</h2>
        <p>Choose a page from the menu to continue.</p>
        <button type="button" onClick={() => setPage("Dashboard")}>Go to Dashboard</button>
      </div>
    );
  };

  return (
    <div className="app-layout">
      <Sidebar setPage={setPage} page={page} />

      <main className="main-content">
        <Header />

        <h3>👋 Welcome {user}</h3>

        <div className="theme-controls" aria-label="Theme controls">
          <button type="button" onClick={() => setTheme("dark")} aria-pressed={theme === "dark"}>
            🌙 Dark
          </button>
          <button type="button" onClick={() => setTheme("light")} aria-pressed={theme === "light"}>
            ☀️ Light
          </button>
        </div>

        {renderPage()}

        <Footer />
      </main>

      <FloatingAIBubble />
    </div>
  );
}
