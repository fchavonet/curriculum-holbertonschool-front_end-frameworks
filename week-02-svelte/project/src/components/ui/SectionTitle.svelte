<script>
  let { children, highlight, size = "default" } = $props();

  function getClassName() {
    let className = "max-w-4xl font-black tracking-tight leading-none";

    if (size === "default") {
      className += " text-4xl md:text-5xl";
    }

    if (size === "large") {
      className += " text-5xl md:text-7xl";
    }

    return className;
  }
</script>

<h2 class={getClassName()}>
  {@render children?.()}

  <span class="block text-violet-300">
    {highlight}
  </span>
</h2>
