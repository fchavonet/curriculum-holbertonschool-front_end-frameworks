<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  iconClassName: {
    type: String,
    required: true
  }
});
</script>

<template>
  <a class="w-9 h-9 flex justify-center items-center rounded-full border border-slate-800 text-slate-500 hover:text-slate-50 hover:border-violet-500 transition" :href="href" :aria-label="label" target="_blank" rel="noopener noreferrer">
    <i :class="iconClassName"></i>
  </a>
</template>
