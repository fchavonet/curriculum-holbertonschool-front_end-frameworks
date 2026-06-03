<script setup>
import { computed } from "vue";

const props = defineProps({
  highlight: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: "default"
  }
});

const titleClassName = computed(function () {
  if (props.size === "large") {
    return "text-5xl md:text-7xl font-black tracking-tight leading-none";
  }

  return "text-4xl md:text-5xl font-black tracking-tight leading-tight";
});
</script>

<template>
  <h2 :class="titleClassName">
    <slot></slot>
    <span class="block text-violet-300">{{ highlight }}</span>
  </h2>
</template>
