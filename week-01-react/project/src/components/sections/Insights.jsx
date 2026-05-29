import { useEffect, useState } from "react";

import SectionBadge from "../ui/SectionBadge.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import InsightCard from "../cards/InsightCard.jsx";

import { getInsights } from "../../services/insightsService.js";

function Insights() {
  const [insights, setInsights] = useState([]);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadInsights() {
      try {
        const data = await getInsights();

        setInsights(data);
      } catch (loadError) {
        setError("Unable to load insights at the moment...");
        console.error(loadError);
      }
    }

    loadInsights();
  }, []);

  return (
    <section id="insights-section" className="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center border-b border-slate-900 bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
        <SectionBadge>Insights</SectionBadge>

        <SectionTitle highlight="Through real-world scenes">
          Explore Agentic AI
        </SectionTitle>

        <div className="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {error && (
            <p className="text-sm text-slate-500">{error}</p>
          )}

          {!error && insights.map(function (insight, index) {
            return (
              <InsightCard key={insight.title} insight={insight} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Insights;