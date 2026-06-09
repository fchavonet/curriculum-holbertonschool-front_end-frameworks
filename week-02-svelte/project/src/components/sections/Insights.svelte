<script>
  import { onMount } from "svelte";

  import SectionBadge from "../ui/SectionBadge.svelte";
  import SectionTitle from "../ui/SectionTitle.svelte";
  import InsightCard from "../cards/InsightCard.svelte";

  import { getInsights } from "../../services/insightsService.js";

  let insights = $state([]);
  let error = $state("");

  onMount(async function () {
    try {
      const data = await getInsights();

      insights = data;
    } catch (loadError) {
      error = "Unable to load insights at the moment...";
      console.error(loadError);
    }
  });
</script>

<section id="insights-section" class="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center border-b border-slate-900 bg-black overflow-hidden">
  <div class="relative max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
    <SectionBadge>Insights</SectionBadge>

    <SectionTitle highlight="Through real-world scenes">
      Explore Agentic AI
    </SectionTitle>

    <div class="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {#if error}
        <p class="text-sm text-slate-500">{error}</p>
      {:else}
        {#each insights as insight, index (insight.title)}
          <InsightCard {insight} {index} />
        {/each}
      {/if}
    </div>
  </div>
</section>
