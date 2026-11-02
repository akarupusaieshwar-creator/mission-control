import { useState } from "react";
import { tips } from "../data/aiTips";

export default function AIChatBox() {
  const [tip, setTip] = useState("Click for AI tip");

  return (
    <div className="card">
      <h2>🤖 AI Coach</h2>

      <p>{tip}</p>

      <button onClick={() => {
        const random = tips[Math.floor(Math.random() * tips.length)];
        setTip(random);
      }}>
        Get Tip
      </button>
    </div>
  );
}