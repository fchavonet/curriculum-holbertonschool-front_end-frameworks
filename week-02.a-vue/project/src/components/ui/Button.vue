<script setup>
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: "primary"
  }
});

const buttonClassName = computed(function () {
  let className = "px-5 py-3 inline-flex justify-center items-center text-xs font-bold text-violet-50 rounded-full transition";

  if (props.variant === "secondary") {
    className += " border border-slate-700 bg-slate-950/60 hover:bg-slate-900";
  } else {
    className += " bg-violet-500 hover:bg-violet-600 shadow-lg shadow-violet-500/40";
  }

  return className;
});
</script>

<template>
  <a :class="buttonClassName" :href="href" target="_blank" rel="noopener noreferrer">
    <slot></slot>
  </a>
</template>
