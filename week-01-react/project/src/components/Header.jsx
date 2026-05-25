import { BrainCircuit } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto h-14 px-6 flex justify-between items-center">
        <a className="flex flex-row justify-center items-center gap-2" href="#top">
          <div className="w-7 h-7 flex flex-row justify-center items-center text-xs font-black rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
            <BrainCircuit className="w-4 h-4" />
          </div>

          <span className="text-sm font-bold">Agentic AI</span>
        </a>

        <nav className="flex flex-row justify-center items-center gap-8 text-xs text-slate-500">
          <ul className="hidden md:flex flex-row justify-center items-center gap-8">
            <li>
              <a className="hover:text-slate-50" href="#about-section">About</a>
            </li>

            <li>
              <a className="hover:text-slate-50" href="#features-section">Features</a>
            </li>

            <li>
              <a className="hover:text-slate-50" href="#insights-section">Insights</a>
            </li>

            <li>
              <a className="hover:text-slate-50" href="#contact-section">Contact</a>
            </li>
          </ul>

          <a className="px-4 py-2 font-semibold text-slate-50 rounded-md bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40" href="https://www.holbertonschool.fr/rejoindre-lhippocamp" target="_blank" rel="noopener noreferrer">Enroll now</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;