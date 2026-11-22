import { useLocalStorage } from "../useLocalStorage";

function csvCell(value: string | number) {
  const text = String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

export default function ExportButton() {
  const [count] = useLocalStorage("count", 0);
  const [streak] = useLocalStorage("streak", 0);
  const [completedQuestions] = useLocalStorage<string[]>("completedQuestions", []);
  const [practiceEntries] = useLocalStorage<string[]>("practiceEntries", []);

  const exportData = () => {
    const rows = [
      ["Type", "Date", "Problem", "Value"],
      ["Summary", "", "Problems solved", count],
      ["Summary", "", "Current streak (days)", streak],
      ["Summary", "", "Unique completed problems", completedQuestions.length],
      ...practiceEntries.map((entry) => {
        const separator = entry.indexOf(":");
        const date = separator === -1 ? "" : entry.slice(0, separator);
        const problem = separator === -1 ? entry : entry.slice(separator + 1);
        return ["Practice", date, problem, ""];
      }),
    ];

    const csv = rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
    const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mission-control-progress.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="card">
      <h2>📄 Export</h2>
      <p>Download your totals and dated practice history as a CSV file.</p>
      <button type="button" onClick={exportData}>Download Progress</button>
    </div>
  );
}
