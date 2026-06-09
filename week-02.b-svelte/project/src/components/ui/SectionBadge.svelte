<script>
  let { children } = $props();
</script>

<p class="px-4 py-2 flex flex-row justify-center items-center gap-2 text-xs text-violet-300 rounded-full border border-violet-500/20 bg-violet-500/10">
  <span class="block text-[8px]">✦</span>
  {@render children?.()}
  <span class="block text-[8px]">✦</span>
</p>
