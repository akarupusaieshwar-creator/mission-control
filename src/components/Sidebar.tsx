type SidebarProps = {
  setPage: (page: string) => void;
  page: string;
};

export default function Sidebar({ setPage, page }: SidebarProps) {
  const items = ["Dashboard", "Questions", "Contests", "Coding Plan", "Consistency", "AI"];

  return (
    <aside className="sidebar">
      <h2>🚀 MC</h2>
      <nav aria-label="Main navigation">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className={page === item ? "active" : ""}
            aria-current={page === item ? "page" : undefined}
            onClick={() => setPage(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
