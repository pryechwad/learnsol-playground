 LearnSol Playground — MVP

Welcome to the LearnSol Playground – a minimal, no-code AI-powered Solana smart contract simulator. This is a submission for the Full Stack Internship assignment at LearnSol.

The goal was to build a v0, lovable MVP version of the core product — inspired by [beta.solpg.io](https://beta.solpg.io) — where users can chat with an AI in natural language and get corresponding Solana (Anchor) smart contract code as output.

---

## 🌐 Live Demo
🎥 

---

---

## 💡 Features

- Chat UI for natural language prompts
- Solana (Anchor) code generation via Google Gemini
- Folder-style code viewer UI
- Simulated mock output/response
- Clean, mobile-friendly layout with dark/light mode toggle

---

## 🧰 Tech Stack

- **Frontend:** Next.js, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes
- **AI Integration:** Google Gemini (via Vercel AI SDK)
- **Deployment:** Vercel

✨ Key Features

- 🗣️ **Prompt-based AI Chat UI**  
  Ask the AI to generate Solana smart contracts using simple natural language instructions.

- 🧠 **Smart Contract Code Generation (Rust + Anchor)**  
  The response from Google Gemini is parsed and shown as a realistic smart contract structure.

- 📂 **Code Display in File Tree Format**  
  Simulates a basic project view — clean and beginner-friendly.

- 💡 **Mock Simulation Output**  
  Basic terminal-like output section to simulate contract behavior or responses.

- 🌗 **Theme Toggle**  
  Clean light/dark mode experience to match your workspace vibe.

- 📱 **Minimal & Responsive UI**  
  Inspired by SolPG beta — simple, fast, focused.

---

## ⚙️ Getting Started


1.git clone https://github.com/your-username/learn

2. Install Dependencies
npm install
3. Add Environment Variable
Create a .env.local file at the root and add your open ai  API Key:

4. Run the Development Server
npm run dev
Now visit http://localhost:3000 to use the app locally.




