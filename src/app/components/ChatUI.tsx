import { useState } from "react";

export default function ChatUI({ onGenerate }: { onGenerate: (prompt: string) => void }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
      setPrompt("");
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-white rounded">
      <textarea
        className="w-full p-2 rounded bg-gray-800 text-white mb-4"
        placeholder="Enter your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Generate
      </button>
    </div>
  );
}
