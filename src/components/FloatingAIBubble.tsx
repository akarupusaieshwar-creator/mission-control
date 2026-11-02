import { useState } from "react";
import AIChatBox from "./AIChatBox";

export default function FloatingAIBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ai-widget">
      {isOpen && (
        <section id="ai-coach-panel" className="ai-panel" aria-label="AI Coach">
          <div className="ai-panel-header">
            <strong>Quick AI Coach</strong>
            <button type="button" className="ai-close" onClick={() => setIsOpen(false)} aria-label="Close AI Coach">
              ×
            </button>
          </div>
          <AIChatBox />
        </section>
      )}

      <button
        type="button"
        className="ai-toggle"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="ai-coach-panel"
        aria-label={isOpen ? "Close AI Coach" : "Open AI Coach"}
      >
        {isOpen ? "×" : "🤖"}
      </button>
    </div>
  );
}
