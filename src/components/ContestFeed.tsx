import { useEffect, useState } from "react";

type CodeforcesContest = {
  id: number;
  name: string;
  phase: string;
  startTimeSeconds: number;
  durationSeconds: number;
};

type CodeforcesResponse = {
  status: string;
  result?: CodeforcesContest[];
};

const platformCalendars = [
  { name: "CodeChef Contest Calendar", url: "https://www.codechef.com/contests", note: "Live list of upcoming contests and their start dates." },
  { name: "HackerRank Contests", url: "https://www.hackerrank.com/contests", note: "Upcoming coding contests and hackathons." },
  { name: "GeeksforGeeks Contest Events", url: "https://www.geeksforgeeks.org/blogs/contests/", note: "Contest announcements and event dates." },
  { name: "InterviewBit Active & Upcoming Contests", url: "https://www.interviewbit.com/contests/", note: "Use the Active and Upcoming tabs for current events." },
];

function getLocalDateTime(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function getNextWeekday(weekday: number) {
  const date = new Date();
  const daysUntil = (weekday - date.getDay() + 7) % 7 || 7;
  date.setDate(date.getDate() + daysUntil);
  date.setHours(0, 0, 0, 0);
  return date;
}

export default function ContestFeed() {
  const [contests, setContests] = useState<CodeforcesContest[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://codeforces.com/api/contest.list?gym=false", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Codeforces is unavailable");
        return response.json() as Promise<CodeforcesResponse>;
      })
      .then((data) => {
        if (data.status !== "OK" || !data.result) throw new Error("Contest data unavailable");
        const upcoming = data.result
          .filter((contest) => contest.phase === "BEFORE")
          .sort((a, b) => a.startTimeSeconds - b.startTimeSeconds)
          .slice(0, 5);
        setContests(upcoming);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        setLoadError(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  const codeChefDates = [
    { title: "DSA Monday", date: getNextWeekday(1) },
    { title: "CodeChef Starters", date: getNextWeekday(3) },
  ];

  return (
    <section className="card contest-feed">
      <h2>🏆 Coding Contests</h2>
      <p className="practice-summary">Upcoming dates use your browser’s local timezone.</p>

      <article className="contest-platform contest-priority">
        <h3>First preference: LeetCode upcoming contests</h3>
        <p>Open LeetCode to see the currently announced weekly and biweekly contests and their dates.</p>
        <a href="https://leetcode.com/contest/" target="_blank" rel="noreferrer">Open LeetCode contests ↗</a>
      </article>

      <h3 className="contest-section-title">Codeforces — upcoming contests</h3>
      {loading && <p className="contest-note">Loading upcoming contests…</p>}
      {!loading && loadError && (
        <p className="contest-note">
          Contest dates could not load. <a href="https://codeforces.com/contests" target="_blank" rel="noreferrer">Open the Codeforces calendar ↗</a>
        </p>
      )}
      {!loading && !loadError && contests.length === 0 && <p className="contest-note">No upcoming contests are listed right now.</p>}
      {!loading && !loadError && contests.map((contest) => (
        <article className="contest-row" key={contest.id}>
          <a href={`https://codeforces.com/contest/${contest.id}`} target="_blank" rel="noreferrer">{contest.name} ↗</a>
          <time dateTime={new Date(contest.startTimeSeconds * 1000).toISOString()}>
            {getLocalDateTime(contest.startTimeSeconds)}
          </time>
        </article>
      ))}

      <h3 className="contest-section-title">CodeChef — next regular weekdays</h3>
      <p className="contest-note">These are the next expected weekdays in the regular schedule; check the live calendar for confirmed contests and times.</p>
      {codeChefDates.map(({ title, date }) => (
        <article className="contest-row" key={title}>
          <span>{title}</span>
          <time dateTime={date.toISOString()}>
            {date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })}
          </time>
        </article>
      ))}
      <p className="contest-note"><a href="https://www.codechef.com/contests" target="_blank" rel="noreferrer">Open CodeChef’s live contest calendar ↗</a></p>

      <h3 className="contest-section-title">Live contest links</h3>
      <div className="contest-platform-grid">
        <article className="contest-platform">
          <a href="https://codeforces.com/contests" target="_blank" rel="noreferrer">Codeforces live calendar ↗</a>
          <p>Upcoming contests above link directly to their event pages.</p>
        </article>
        {platformCalendars.map((platform) => (
          <article className="contest-platform" key={platform.name}>
            <a href={platform.url} target="_blank" rel="noreferrer">{platform.name} contests ↗</a>
            <p>{platform.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
