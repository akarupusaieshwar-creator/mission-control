import { useLocalStorage } from "../useLocalStorage";

export default function ExportButton() {
  const [count] = useLocalStorage("count", 0);
  const [streak] = useLocalStorage("streak", 0);

  const exportData = () => {
    const data = `
Mission Control Report
---------------------
Problems Solved: ${count}
Streak: ${streak} days
    `;

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "progress.txt";
    a.click();
  };

  return (
    <div className="card">
      <h2>📄 Export</h2>
      <button onClick={exportData}>Download Report</button>
    </div>
  );
}
