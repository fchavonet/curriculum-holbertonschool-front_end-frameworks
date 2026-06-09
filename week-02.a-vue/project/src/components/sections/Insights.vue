<script setup>
import { onMounted, ref } from "vue";

import SectionBadge from "../ui/SectionBadge.vue";
import SectionTitle from "../ui/SectionTitle.vue";
import InsightCard from "../cards/InsightCard.vue";

import { getInsights } from "../../services/insightsService.js";

const insights = ref([]);
const error = ref("");

onMounted(function () {
  loadInsights();
});

async function loadInsights() {
  try {
    const data = await getInsights();

    insights.value = data;
  } catch (loadError) {
    error.value = "Unable to load insights at the moment...";
    console.error(loadError);
  }
}
</script>

<template>
  <section id="insights-section" class="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center border-b border-slate-900 bg-black overflow-hidden">
    <div class="relative max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
      <SectionBadge>Insights</SectionBadge>

      <SectionTitle highlight="Through real-world scenes">
        Explore Agentic AI
      </SectionTitle>

      <div class="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <p v-if="error" class="text-sm text-slate-500">{{ error }}</p>

        <InsightCard v-for="(insight, index) in insights" v-else :key="insight.title" :insight="insight" :index="index" />
      </div>
    </div>
  </section>
</template>
