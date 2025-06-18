"use client";

import { useState } from "react";

export default function OutputSection() {
  const [selectedFile, setSelectedFile] = useState<"src" | "tests">("src");
  const [files, setFiles] = useState({
    src: `#program
pub fn hello_world(ctx: Context) {
    msg!("Hello, world!");
    Ok(())
}`,
    tests: `// test file
#[test]
fn test_hello_world() {
    assert_eq!(2 + 2, 4);
}`,
  });

  const [output, setOutput] = useState("Hello, world!"); // ✅ made mutable
  const [prompt, setPrompt] = useState("");

  const handlePrompt = async () => {
    if (!prompt.trim()) return;
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setFiles(f => ({ ...f, [selectedFile]: data.generatedText || f[selectedFile] }));
      setOutput(data.generatedText || ""); // ✅ update preview output too
      setPrompt("");
    } catch {
      setFiles(f => ({ ...f, [selectedFile]: f[selectedFile] + `\n// AI: ${prompt}` }));
      setOutput(`AI fallback: ${prompt}`); // ✅ fallback output
      setPrompt("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center py-8">
      <div className="w-full max-w-5xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🧿</span>
          <span className="font-bold text-2xl text-white">LearnSol</span>
          <span className="text-xl text-gray-300">Sage Mini Playground</span>
        </div>
        <div className="flex w-full mb-4">
          <input
            className="flex-1 p-3 rounded-l bg-gray-800 text-white border-none focus:outline-none"
            placeholder="Ask me anything..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') handlePrompt(); }}
          />
          <button
            className="bg-gray-800 text-white px-5 rounded-r border-l border-gray-700 hover:bg-gray-700"
            onClick={handlePrompt}
          >
            <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="bg-gray-800 rounded-lg p-4 min-w-[180px] w-full md:w-1/4 text-white">
            <div className="font-semibold mb-2 text-gray-300">File structure</div>
            <ul className="text-sm">
              <li
                className={`mb-1 cursor-pointer flex items-center gap-2 ${
                  selectedFile === "src" ? "font-bold text-blue-400" : ""
                }`}
                onClick={() => setSelectedFile("src")}
              >
                <span>📁</span>src
              </li>
              <li
                className={`mb-1 cursor-pointer flex items-center gap-2 ${
                  selectedFile === "tests" ? "font-bold text-blue-400" : ""
                }`}
                onClick={() => setSelectedFile("tests")}
              >
                <span>📁</span>tests
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-gray-800 rounded-lg p-4 min-h-[180px] text-white">
              <pre className="whitespace-pre-wrap font-mono text-base">
                {files[selectedFile]}
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-white">
              <div className="font-semibold text-gray-300 mb-2">
                Preview / Simulate Output
              </div>
              <div className="text-green-400 whitespace-pre-wrap">{output}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
