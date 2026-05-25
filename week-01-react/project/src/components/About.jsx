import SectionBadge from "./SectionBadge.jsx";

import steps from "../data/steps.js";

function About() {
  return (
    <section id="about-section" className="relative py-24 flex flex-col justify-center items-center bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
        <SectionBadge>What is Agentic AI?</SectionBadge>

        <h2 className="max-w-4xl text-4xl md:text-5xl font-black tracking-tight leading-none">
          AI that does more than answer

          <span className="block text-violet-300">
            It acts with purpose
          </span>
        </h2>

        <p class="max-w-2xl text-sm md:text-base text-slate-300 text-start">
          Agentic AI refers to artificial intelligence systems designed to pursue goals, make decisions, use tools, and adapt their actions across multiple steps. Instead of only responding to a single prompt, an AI agent can break down a task, plan a strategy, execute actions, evaluate results, and continue until the objective is reached.
        </p>

        <div className="mt-8 grid md:grid-cols-[1fr_1.2fr] justify-center items-center gap-8">
          <div className="p-8 flex flex-col justify-center items-start gap-4 text-start rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
            <div>
              <h3 className="text-lg font-bold">Traditional AI</h3>

              <p className="mt-2 text-sm text-slate-500">
                Responds to direct instructions, generates content, answers questions, or analyzes information within a limited interaction.
              </p>
            </div>

            <div className="w-full h-px bg-slate-800"></div>

            <div>
              <h3 className="text-lg font-bold text-violet-300">Agentic AI</h3>

              <p className="mt-2 text-sm text-slate-500">
                Understands a goal, chooses actions, uses external tools, follows a plan, and adjusts its behavior based on feedback.
              </p>
            </div>
          </div>

          <div className="relative mt-4">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500 to-transparent"></div>

            <div className="flex flex-col justify-center items-start gap-6">
              {steps.map(function (step) {
                return (
                  <div key={step.number} className="relative pl-12 flex flex-col justify-center items-start text-start">
                    <div className="absolute left-0 top-0 w-8 h-8 flex flex-row justify-center items-center text-xs font-black rounded-full bg-violet-500 shadow-lg shadow-violet-500/40">
                      {step.number}
                    </div>

                    <h3 className="mt-1 font-bold">{step.title}</h3>

                    <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;