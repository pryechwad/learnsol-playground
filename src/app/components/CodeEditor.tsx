import React from "react";

export default function CodeEditor({ code, onChange }: { code: string; onChange: (val: string) => void }) {
  return (
    <textarea
      className="w-full h-64 bg-gray-900 text-green-300 p-3 rounded font-mono resize-none border border-gray-700"
      value={code}
      onChange={e => onChange(e.target.value)}
      spellCheck={false}
    />
  );
}
