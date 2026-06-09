<script>
  import Button from "../ui/Button.svelte";
  import SectionBadge from "../ui/SectionBadge.svelte";
  import StatCard from "../cards/StatCard.svelte";

  import stats from "../../data/stats.js";
</script>

<section id="hero-section" class="relative pt-36 pb-24 flex flex-col justify-center items-center border-b border-slate-900 bg-slate-950 overflow-hidden">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.35),transparent_32%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.25),transparent_28%),linear-gradient(135deg,#1e1238_0%,#0f172a_45%,#020617_100%)]"></div>
  <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>
  <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,6,23,0.45)_75%)]"></div>

  <div class="relative max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
    <SectionBadge>The future of coding</SectionBadge>

    <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-none">
      Build smarter workflows

      <span class="block text-violet-300">
        with Agentic AI
      </span>
    </h1>

    <p class="max-w-2xl text-sm md:text-base text-slate-300">
      Create autonomous AI agents that think, plan, and execute complex tasks. Transform your business with intelligent automation.
    </p>

    <div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
      <Button href="https://www.holbertonschool.fr/">
        Start learning with Holberton School →
      </Button>

      <Button href="https://www.holbertonschool.fr/methodologie" variant="secondary">
        Methodology
      </Button>
    </div>

    <div class="w-full max-w-4xl mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {#each stats as stat (stat.label)}
        <StatCard value={stat.value} label={stat.label} />
      {/each}
    </div>
  </div>
</section>
