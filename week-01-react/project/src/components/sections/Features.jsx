import SectionBadge from "../ui/SectionBadge.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";
import FeatureCard from "../cards/FeatureCard.jsx";

import features from "../../data/features.js";

function Features() {
  return (
    <section id="features-section" className="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center bg-black overflow-hidden">
      <div className="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
        <SectionBadge>Features</SectionBadge>

        <SectionTitle highlight="With powerful AI agents">
          Everything you need to build
        </SectionTitle>

        <div className="w-full mx-auto mt-12 grid md:grid-cols-3 gap-8">
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