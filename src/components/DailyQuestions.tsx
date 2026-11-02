import { useEffect, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import { questions, type Difficulty, type Question } from "../data/questionPool";

const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function DailyQuestions() {
  const [todayKey, setTodayKey] = useState(() => localDateKey(new Date()));
  const [topic, setTopic] = useState("All topics");
  const [completedQuestions, setCompletedQuestions] = useLocalStorage<string[]>("completedQuestions", []);
  const [practiceEntries, setPracticeEntries] = useLocalStorage<string[]>("practiceEntries", []);
  const [count, setCount] = useLocalStorage("count", 0);
  const [streak, setStreak] = useLocalStorage("streak", 0);
  const [lastPracticeDate, setLastPracticeDate] = useLocalStorage("lastPracticeDate", "");

  useEffect(() => {
    const interval = window.setInterval(() => {
      const currentDateKey = localDateKey(new Date());
      setTodayKey((previousDateKey) => previousDateKey === currentDateKey ? previousDateKey : currentDateKey);
    }, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  const dateParts = todayKey.split("-").map(Number);
  const dayNumber = Math.floor(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]) / 86_400_000);
  const dailyQuestions = difficulties
    .map((difficulty, difficultyIndex) => {
      const candidates = questions.filter((question) =>
        question.difficulty === difficulty && (topic === "All topics" || question.topic === topic),
      );
      if (candidates.length === 0) return null;
      return candidates[(dayNumber + difficultyIndex * 3) % candidates.length];
    })
    .filter((question): question is Question => question !== null);
  const topics = Array.from(new Set(questions.map((question) => question.topic))).sort();
  const displayDate = new Date(`${todayKey}T00:00:00`).toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const markCompleted = (question: Question) => {
    const today = new Date();
    const currentDateKey = localDateKey(today);
    const practiceEntry = `${currentDateKey}:${question.title}`;
    if (practiceEntries.includes(practiceEntry)) return;

    if (!completedQuestions.includes(question.title)) {
      setCompletedQuestions([...completedQuestions, question.title]);
      setCount(count + 1);
    }

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayKey = localDateKey(yesterday);
    if (lastPracticeDate !== currentDateKey) {
      setStreak(lastPracticeDate === yesterdayKey ? streak + 1 : 1);
      setLastPracticeDate(currentDateKey);
    }
    setPracticeEntries([...practiceEntries, practiceEntry]);
  };

  return (
    <section className="card">
      <div className="daily-questions-heading">
        <div>
          <h2>📘 Daily Questions</h2>
          <p className="practice-summary">{displayDate} · one per difficulty · ★ = landmark problem</p>
        </div>
        <label className="topic-filter">
          Topic
          <select value={topic} onChange={(event) => setTopic(event.target.value)}>
            <option>All topics</option>
            {topics.map((topicName) => <option key={topicName}>{topicName}</option>)}
          </select>
        </label>
      </div>

      <div className="daily-question-list">
        {dailyQuestions.map((question) => {
          const practicedToday = practiceEntries.includes(`${todayKey}:${question.title}`);
          const solvedBefore = completedQuestions.includes(question.title);
          return (
            <article className="question-row" key={question.title}>
              <div className="question-details">
                <div className="question-tags">
                  <span className={`difficulty-tag difficulty-${question.difficulty.toLowerCase()}`}>
                    {question.difficulty}
                  </span>
                  <span className="topic-tag">{question.topic}</span>
                  {question.landmark && <span className="landmark-tag">★ Landmark</span>}
                </div>
                <a href={question.link} target="_blank" rel="noreferrer">{question.title}</a>
              </div>
              <button type="button" onClick={() => markCompleted(question)} disabled={practicedToday}>
                {practicedToday ? "✅ Practiced today" : solvedBefore ? "Practice again" : "Mark solved"}
              </button>
            </article>
          );
        })}
      </div>
      <p className="practice-summary">{count} solved · {streak} day streak</p>
      <nav className="challenge-links" aria-label="External daily challenge pages">
        <span>Yesterday’s challenge:</span>
        <a href="https://leetcode.com/problemset/" target="_blank" rel="noreferrer">
          LeetCode problem calendar ↗
        </a>
        <a href="https://www.geeksforgeeks.org/problem-of-the-day/" target="_blank" rel="noreferrer">
          GeeksforGeeks archive ↗
        </a>
      </nav>
      <nav className="challenge-links platform-links" aria-label="More coding practice platforms">
        <span>More practice:</span>
        <a href="https://codeforces.com/problemset/" target="_blank" rel="noreferrer">Codeforces ↗</a>
        <a href="https://www.codechef.com/practice" target="_blank" rel="noreferrer">CodeChef ↗</a>
        <a href="https://www.hackerrank.com/domains/algorithms" target="_blank" rel="noreferrer">HackerRank ↗</a>
        <a href="https://www.interviewbit.com/courses/programming/" target="_blank" rel="noreferrer">InterviewBit ↗</a>
      </nav>
    </section>
  );
}
