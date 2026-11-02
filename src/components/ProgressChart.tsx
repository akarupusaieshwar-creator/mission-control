import { useLocalStorage } from "../useLocalStorage";

export default function ProgressChart() {
  const [count] = useLocalStorage("count", 0);

  return (
    <div className="card">
      <h2>📊 Progress</h2>

      <div style={{
        height: "20px",
        background: "#334155",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${Math.min(count * 10, 100)}%`,
          background: "limegreen",
          height: "100%"
        }} />
      </div>

      <p>{count} problems solved</p>
    </div>
  );
}
