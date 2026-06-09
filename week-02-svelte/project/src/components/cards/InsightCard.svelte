<script>
  let { insight, index } = $props();

  function getCardClassName() {
    let cardClassName = "group relative min-h-80 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";

    if (index === 0) {
      cardClassName = "group relative min-h-80 sm:col-span-2 rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40 overflow-hidden";
    }

    return cardClassName;
  }
</script>

<article class={getCardClassName()}>
  <img class="absolute inset-0 w-full h-full object-cover opacity-50 transition duration-500 group-hover:scale-110 group-hover:opacity-75" src={insight.image} alt={insight.title} />

  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  <div class="relative min-h-80 p-6 flex flex-col justify-end items-start text-start z-10">
    <span class="px-4 py-2 flex flex-row justify-center items-center gap-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
      {insight.category}
    </span>

    <h3 class="mt-2 text-2xl font-bold">{insight.title}</h3>

    <p class="max-w-sm mt-1 text-sm text-slate-500">
      {insight.description}
    </p>
  </div>
</article>
