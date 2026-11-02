import { useLocalStorage } from "../useLocalStorage";

function localDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function ConsistencyTracker() {
  const [practiceEntries] = useLocalStorage<string[]>("practiceEntries", []);
  const [streak] = useLocalStorage("streak", 0);
  const todayKey = localDateKey(new Date());
  const week = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + index);
    const dateKey = localDateKey(date);
    return {
      date,
      dateKey,
      practiced: practiceEntries.some((entry) => entry.startsWith(`${dateKey}:`)),
      isToday: dateKey === todayKey,
    };
  });

  return (
    <section className="card">
      <h2>🔥 Consistency Tracker</h2>
      <p className="practice-summary">Current streak: {streak} {streak === 1 ? "day" : "days"}</p>
      <div className="tracker-grid" aria-label="Practice activity for the last seven days">
        {week.map(({ date, dateKey, practiced, isToday }) => (
          <div
            key={dateKey}
            className={`tracker-day${practiced ? " is-complete" : ""}${isToday ? " is-today" : ""}`}
            aria-label={`${date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}: ${practiced ? "practice completed" : "no practice recorded"}`}
            aria-current={isToday ? "date" : undefined}
          >
            <span>{date.toLocaleDateString(undefined, { weekday: "short" })}</span>
            <strong>{date.getDate()}</strong>
            <span>{practiced ? "Done" : "—"}</span>
          </div>
        ))}
      </div>
      <p className="tracker-help">Mark a daily problem as practiced to update this tracker.</p>
    </section>
  );
}
