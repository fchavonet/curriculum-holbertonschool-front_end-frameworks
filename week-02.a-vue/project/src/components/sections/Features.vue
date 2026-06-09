<script setup>
import SectionBadge from "../ui/SectionBadge.vue";
import SectionTitle from "../ui/SectionTitle.vue";
import FeatureCard from "../cards/FeatureCard.vue";

import features from "../../data/features.js";
</script>

<template>
  <section id="features-section" class="scroll-mt-24 relative pb-24 flex flex-col justify-center items-center bg-black overflow-hidden">
    <div class="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
      <SectionBadge>Features</SectionBadge>

      <SectionTitle highlight="With powerful AI agents">
        Everything you need to build
      </SectionTitle>

      <div class="w-full mx-auto mt-12 grid md:grid-cols-3 gap-8">
        <FeatureCard v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title" :description="feature.description" />
      </div>
    </div>
  </section>
</template>
