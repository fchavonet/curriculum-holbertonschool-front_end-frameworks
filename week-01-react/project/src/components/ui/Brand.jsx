import { BrainCircuit } from "lucide-react";

function Brand({ href = "#top" }) {
    return (
        <a className="flex flex-row justify-center items-center gap-2" href={href}>
            <div className="w-7 h-7 flex flex-row justify-center items-center text-xs font-black rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
                <BrainCircuit className="w-4 h-4" />
            </div>

            <span className="text-sm font-bold">
                Agentic AI
            </span>
        </a>
    );
}

export default Brand;