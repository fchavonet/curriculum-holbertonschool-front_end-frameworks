<script setup>
import { BrainCircuit } from "lucide-vue-next";

defineProps({
  href: {
    type: String,
    default: "#top"
  }
});
</script>

<template>
  <a class="flex flex-row justify-center items-center gap-2" :href="href">
    <div class="w-7 h-7 flex flex-row justify-center items-center text-xs font-black rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
      <BrainCircuit class="w-4 h-4" />
    </div>

    <span class="text-sm font-bold">Agentic AI</span>
  </a>
</template>
