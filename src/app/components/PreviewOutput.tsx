import React from "react";

export default function PreviewOutput({ output }: { output: string }) {
  return (
    <div className="w-full bg-gray-800 text-white p-4 rounded mt-2 text-center">
      <div className="font-semibold text-yellow-400 mb-2">⚡ Preview / Simulate Output</div>
      <div className="text-green-400">{output}</div>
    </div>
  );
}
