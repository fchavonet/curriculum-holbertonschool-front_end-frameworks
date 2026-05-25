import { BrainCircuit } from "lucide-react";

function App() {
  return (
    <div className="p-6 bg-slate-950 text-slate-50 antialiased">
      <a className="flex flex-row justify-center items-center gap-2" href="#top">
        <div className="w-7 h-7 flex flex-row justify-center items-center text-xs font-black rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
          <BrainCircuit className="w-4 h-4" />
        </div>

        <span className="text-sm font-bold">Agentic AI</span>
      </a>
    </div>

  );
}

export default App;