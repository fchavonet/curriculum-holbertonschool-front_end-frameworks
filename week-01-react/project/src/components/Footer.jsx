import { BrainCircuit } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6">
      <div className="max-w-6xl mx-auto pt-24 pb-12 grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col justify-start items-start gap-4">
          <a className="flex flex-row justify-start items-center gap-2" href="#top">
            <div className="w-7 h-7 flex flex-row justify-center items-center text-xs font-black rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
              <BrainCircuit className="w-4 h-4" />
            </div>

            <span className="text-sm font-bold">Agentic AI</span>
          </a>

          <p className="text-xs text-slate-500">
            Explore the future of development with Agentic AI.
          </p>

          <div className="flex flex-row justify-start items-center gap-2">
            <a className="w-8 h-8 flex flex-row justify-center items-center rounded-md border border-slate-800 bg-slate-950 hover:bg-violet-500 shadow-xl shadow-slate-950/40 hover:shadow-violet-500/40" href="https://www.instagram.com/holbertonfrance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a className="w-8 h-8 flex flex-row justify-center items-center rounded-md border border-slate-800 bg-slate-950 hover:bg-violet-500 shadow-xl shadow-slate-950/40 hover:shadow-violet-500/40" href="https://www.tiktok.com/@holbertonfrance" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
            <a className="w-8 h-8 flex flex-row justify-center items-center rounded-md border border-slate-800 bg-slate-950 hover:bg-violet-500 shadow-xl shadow-slate-950/40 hover:shadow-violet-500/40" href="https://x.com/HolbertonFRA" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="bi bi-twitter-x"></i></a>
            <a className="w-8 h-8 flex flex-row justify-center items-center rounded-md border border-slate-800 bg-slate-950 hover:bg-violet-500 shadow-xl shadow-slate-950/40 hover:shadow-violet-500/40" href="https://www.youtube.com/@HolbertonFrance" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><i className="bi bi-youtube"></i></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Navigation</h3>

          <ul className="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
            <li><a className="hover:text-slate-50" href="#hero-section">Hero section</a></li>
            <li><a className="hover:text-slate-50" href="#about-section">About</a></li>
            <li><a className="hover:text-slate-50" href="#features-section">Features</a></li>
            <li><a className="hover:text-slate-50" href="#insights-section">Insights</a></li>
            <li><a className="hover:text-slate-50" href="#contact-section">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Holberton School</h3>

          <ul className="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/" target="_blank" rel="noopener noreferrer">About</a></li>
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/methodologie" target="_blank" rel="noopener noreferrer">Methodology</a></li>
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/a-propos" target="_blank" rel="noopener noreferrer">Story</a></li>
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/" target="_blank" rel="noopener noreferrer">Agenda</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold">Curriculum</h3>

          <ul className="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering" target="_blank" rel="noopener noreferrer">Bachelor</a></li>
            <li><a className="hover:text-slate-50" href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering#programme" target="_blank" rel="noopener noreferrer">Program</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 pb-24 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-xs text-slate-500 border-t border-slate-900">
        <p>© {currentYear} <a href="https://github.com/fchavonet" target="_blank" rel="noopener noreferrer">Fabien Chavonet</a></p>
        <p>Built for the Holberton School Front-end Frameworks curriculum.</p>
      </div>
    </footer>
  );
}

export default Footer;