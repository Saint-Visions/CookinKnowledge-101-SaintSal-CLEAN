"use client";

import { useState } from "react";

export default function NotesAndPrompts() {
  const [note, setNote] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4">🧠 Sticky Notes + Prompts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sticky Notes */}
        <div className="bg-charcoal border border-gold p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gold mb-2">📝 Sticky Notes</h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={6}
            className="w-full bg-black border border-gold text-white p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Capture ideas, reminders, or next steps..."
          />
        </div>

        {/* Chat Prompts */}
        <div className="bg-charcoal border border-gold p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gold mb-2">💬 AI Prompt</h3>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full bg-black border border-gold text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Ask your Companion something..."
          />
          <button
            className="mt-4 bg-gold text-black font-bold py-2 px-4 rounded hover:bg-yellow-400 transition"
            onClick={() => {
              alert(`Prompt sent: "${prompt}" 🔥 (future API integration)`);
              setPrompt("");
            }}
          >
            Send Prompt
          </button>
        </div>
      </div>
    </section>
  );
}
