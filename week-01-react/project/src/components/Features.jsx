import SectionBadge from "./SectionBadge.jsx";
import FeatureCard from "./FeatureCard.jsx";

import features from "../data/features.js";

function Features() {
  return (
    <section id="features-section" className="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center bg-black overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
        <SectionBadge>Features</SectionBadge>

        <h2 className="max-w-4xl text-4xl md:text-5xl font-black tracking-tight leading-none">
          Everything You Need to Build

          <span className="block text-violet-300">
            With powerful AI agents
          </span>
        </h2>

        <div className="w-full mx-auto mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(function (feature) {
            return (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;