<script setup>
import Brand from "../ui/Brand.vue";
import Button from "../ui/Button.vue";
</script>

<template>
  <header class="fixed top-0 right-0 left-0 w-full border-b border-slate-900 bg-slate-950/80 backdrop-blur z-50">
    <div class="max-w-6xl mx-auto h-14 px-6 flex justify-between items-center">
      <Brand href="#top" />

      <nav class="flex flex-row justify-center items-center gap-8 text-xs text-slate-500">
        <ul class="hidden md:flex flex-row justify-center items-center gap-8">
          <li>
            <a class="hover:text-slate-50" href="#about-section">About</a>
          </li>

          <li>
            <a class="hover:text-slate-50" href="#features-section">Features</a>
          </li>

          <li>
            <a class="hover:text-slate-50" href="#insights-section">Insights</a>
          </li>

          <li>
            <a class="hover:text-slate-50" href="#contact-section">Contact</a>
          </li>
        </ul>

        <Button href="https://www.holbertonschool.fr/rejoindre-lhippocamp">
          Enroll now
        </Button>
      </nav>
    </div>
  </header>
</template>
