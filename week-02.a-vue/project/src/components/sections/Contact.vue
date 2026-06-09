<script setup>
import { computed, ref } from "vue";

import { AtSign, FolderCode, Mail, Sparkles, Users, User } from "lucide-vue-next";

import Button from "../ui/Button.vue";
import SectionBadge from "../ui/SectionBadge.vue";
import SectionTitle from "../ui/SectionTitle.vue";

const initialFormData = { name: "", email: "", message: "" };
const defaultFeedbackMessage = "Please fill all required fields.";

const formData = ref({ ...initialFormData });
const isSending = ref(false);
const feedbackMessage = ref(defaultFeedbackMessage);

const isNameValid = computed(function () {
  return formData.value.name.trim().length >= 2;
});

const isEmailValid = computed(function () {
  return formData.value.email.includes("@") && formData.value.email.includes(".");
});

const isMessageValid = computed(function () {
  return formData.value.message.trim().length >= 10;
});

const isFormValid = computed(function () {
  return isNameValid.value && isEmailValid.value && isMessageValid.value;
});

const buttonText = computed(function () {
  if (isSending.value) {
    return "Sending...";
  }

  return "Send message";
});

const buttonClassName = computed(function () {
  let buttonClass = "w-full px-4 py-2 font-semibold text-slate-50 rounded-md shadow-lg shadow-violet-500/40 transition";

  if (isFormValid.value && !isSending.value) {
    buttonClass += " bg-violet-500 hover:bg-violet-600 cursor-pointer";
  }

  if (!isFormValid.value || isSending.value) {
    buttonClass += " bg-violet-500 opacity-60 cursor-not-allowed";
  }

  return buttonClass;
});

function handleChange() {
  feedbackMessage.value = defaultFeedbackMessage;
}

async function handleSubmit() {
  if (!isFormValid.value) {
    return;
  }

  isSending.value = true;
  feedbackMessage.value = "Sending message...";

  await new Promise(function (resolve) {
    setTimeout(resolve, 1500);
  });

  isSending.value = false;
  feedbackMessage.value = "Your message has been sent successfully.";
  formData.value = { ...initialFormData };

  setTimeout(function () {
    feedbackMessage.value = defaultFeedbackMessage;
  }, 9000);
}

function getFieldClass(isValid) {
  let fieldClass = "px-4 py-2 text-sm text-slate-50 placeholder:text-slate-500 rounded-md border border-slate-800 focus:outline-none bg-black shadow-xl shadow-slate-950/40 transition";

  if (isValid) {
    fieldClass += " focus:border-violet-500";
  } else {
    fieldClass += " focus:border-red-500";
  }

  return fieldClass;
}
</script>

<template>
  <section id="contact-section" class="relative py-24 flex flex-col justify-center items-center border-b border-slate-900 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(168,85,247,0.35),transparent_32%),radial-gradient(circle_at_85%_60%,rgba(59,130,246,0.25),transparent_28%),linear-gradient(135deg,#1e1238_0%,#0f172a_45%,#020617_100%)]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>
    <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(2,6,23,0.45)_75%)]"></div>

    <div class="relative w-full max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-8 text-center">
      <SectionBadge>Start your AI journey</SectionBadge>

      <SectionTitle highlight="Agentic AI?" size="large">
        Ready to Explore
      </SectionTitle>

      <div class="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button href="https://www.holbertonschool.fr/rejoindre-lhippocamp">
          Enroll at Holberton School →
        </Button>

        <Button href="https://www.holbertonschool.fr/admission" variant="secondary">
          Need more information?
        </Button>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
        <span class="flex justify-center items-center gap-2">
          <FolderCode class="w-4 h-4 text-violet-500" />
          Project-based learning
        </span>

        <span class="flex justify-center items-center gap-2">
          <Users class="w-4 h-4 text-violet-500" />
          Peer learning environment
        </span>

        <span class="flex justify-center items-center gap-2">
          <Sparkles class="w-4 h-4 text-violet-500" />
          AI-powered workflows
        </span>
      </div>

      <form class="w-full max-w-2xl mt-8 p-8 flex flex-col justify-center items-center gap-8 text-start rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur shadow-2xl shadow-slate-950/40" @submit.prevent="handleSubmit">
        <div class="w-full flex flex-col gap-2">
          <label class="ms-2 flex flex-row justify-start items-center gap-2 text-sm font-semibold" for="name">
            <User class="w-4 h-4 text-violet-500" /> Full name
          </label>

          <input id="name" v-model="formData.name" :class="getFieldClass(isNameValid)" name="name" type="text" placeholder="Your full name..." autocomplete="off" required @input="handleChange">
        </div>

        <div class="w-full flex flex-col gap-2">
          <label class="ms-2 flex flex-row justify-start items-center gap-2 text-sm font-semibold" for="email">
            <AtSign class="w-4 h-4 text-violet-500" /> Email
          </label>

          <input id="email" v-model="formData.email" :class="getFieldClass(isEmailValid)" name="email" type="email" placeholder="you@example.com" autocomplete="off" required @input="handleChange">
        </div>

        <div class="w-full flex flex-col gap-2">
          <label class="ms-2 flex flex-row justify-start items-center gap-2 text-sm font-semibold" for="message">
            <Mail class="w-4 h-4 text-violet-500" /> Message
          </label>

          <textarea id="message" v-model="formData.message" :class="`${getFieldClass(isMessageValid)} min-h-32 resize-none`" name="message" placeholder="Tell us about your project or learning goals!" autocomplete="off" required @input="handleChange"></textarea>
        </div>

        <button :class="buttonClassName" type="submit" :disabled="!isFormValid || isSending">
          {{ buttonText }}
        </button>

        <p class="min-h-5 text-sm text-slate-500 transition">
          {{ feedbackMessage }}
        </p>
      </form>
    </div>
  </section>
</template>
