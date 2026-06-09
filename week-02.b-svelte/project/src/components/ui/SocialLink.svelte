<script>
  let { href, label, iconClassName } = $props();
</script>

<a class="w-8 h-8 flex flex-row justify-center items-center rounded-md border border-slate-800 bg-slate-950 hover:bg-violet-500 shadow-xl shadow-slate-950/40 hover:shadow-violet-500/40 transition" {href} target="_blank" rel="noopener noreferrer" aria-label={label}>
  <i class={iconClassName}></i>
</a>
