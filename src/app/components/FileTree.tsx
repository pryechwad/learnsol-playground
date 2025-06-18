import React from "react";

export default function FileTree({ onSelect }: { onSelect: (file: string) => void }) {
  return (
    <div className="bg-gray-800 p-3 rounded w-40 min-w-[120px] text-sm">
      <div className="font-bold mb-2">Files</div>
      <ul>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => onSelect('src/main.rs')}>src/</li>
        <li className="ml-4 cursor-pointer hover:text-blue-400" onClick={() => onSelect('src/main.rs')}>main.rs</li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => onSelect('tests/test.rs')}>tests/</li>
        <li className="ml-4 cursor-pointer hover:text-blue-400" onClick={() => onSelect('tests/test.rs')}>test.rs</li>
        <li className="cursor-pointer hover:text-blue-400" onClick={() => onSelect('Cargo.toml')}>Cargo.toml</li>
      </ul>
    </div>
  );
}
