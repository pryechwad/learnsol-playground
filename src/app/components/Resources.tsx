"use client";

export default function Resources() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-gray-800 rounded">
        <h2 className="text-lg font-semibold mb-2">Anchor</h2>
        <p>Develop Solana programs with Anchor framework.</p>
        <a
          href="https://www.anchor-lang.com/docs/basics/program-structure"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Learn more
        </a>
      </div>
      <div className="p-4 bg-gray-800 rounded">
        <h2 className="text-lg font-semibold mb-2">Solana Docs</h2>
        <p>Core documentation for Solana development.</p>
        <a
          href="https://solana.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
