import { BrainCircuit } from "lucide-react";

import Brand from "../ui/Brand.jsx";
import Button from "../ui/Button.jsx";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto h-14 px-6 flex justify-between items-center">
        <Brand href="#top"/>

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

          <Button href="https://www.holbertonschool.fr/rejoindre-lhippocamp">
            Enroll now
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;