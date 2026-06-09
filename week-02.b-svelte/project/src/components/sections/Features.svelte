<script>
  import SectionBadge from "../ui/SectionBadge.svelte";
  import SectionTitle from "../ui/SectionTitle.svelte";
  import FeatureCard from "../cards/FeatureCard.svelte";

  import features from "../../data/features.js";
</script>

<section id="features-section" class="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center bg-black overflow-hidden">
  <div class="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
    <SectionBadge>Features</SectionBadge>

    <SectionTitle highlight="With powerful AI agents">
      Everything you need to build
    </SectionTitle>

    <div class="w-full mx-auto mt-12 grid md:grid-cols-3 gap-8">
      {#each features as feature (feature.title)}
        <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
      {/each}
    </div>
  </div>
</section>
