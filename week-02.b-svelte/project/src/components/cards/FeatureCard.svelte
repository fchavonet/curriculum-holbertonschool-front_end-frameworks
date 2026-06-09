<script>
  let { icon: Icon, title, description } = $props();
</script>

<article class="p-8 flex flex-col justify-start items-start gap-4 text-start rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-slate-950/40">
  <div class="w-8 h-8 flex flex-row justify-center items-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
    <Icon class="w-5 h-5" />
  </div>

  <h3 class="text-sm font-bold">{title}</h3>

  <p class="-mt-3 text-sm text-slate-500">{description}</p>
</article>
