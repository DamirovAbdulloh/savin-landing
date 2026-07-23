<template>
  <!-- ref="faqRef" orqali butun sektsiyani kuzatamiz -->
  <section 
    ref="faqRef" 
    class="w-full bg-white py-10 px-4 sm:py-14 overflow-hidden"
  >
    <div class="max-w-2xl mx-auto">
      <!-- Sarlavha animatsiyasi -->
      <h2
        class="text-center text-lg sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 opacity-0"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        {{ t("faq.title") }}
      </h2>

      <!-- Savollar ro'yxati -->
      <div class="flex flex-col gap-3">
        <div
          v-for="(item, index) in t('faq.items')"
          :key="index"
          class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden opacity-0"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: isVisible ? `${index * 80}ms` : '0ms' }"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="w-full flex items-start sm:items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5 text-left transition-colors duration-200 hover:bg-gray-50/50"
          >
            <span class="text-sm sm:text-base font-semibold text-gray-900">
              {{ item.question }}
            </span>
            <span
              class="shrink-0 mt-0.5 sm:mt-0 text-gray-400 text-xl leading-none transition-transform duration-200"
              :class="openIndex === index ? 'rotate-180 text-emerald-600' : ''"
            >
              {{ openIndex === index ? "−" : "+" }}
            </span>
          </button>

          <!-- Accordion (Ochilish-yopilish) animatsiyasi -->
          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
          >
            <div class="overflow-hidden">
              <p
                class="px-4 pb-4 sm:px-6 sm:pb-5 text-xs sm:text-sm text-gray-500 leading-relaxed"
              >
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();
const openIndex = ref(0);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

// Skrolni kuzatish qismi
const faqRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        if (faqRef.value) observer.unobserve(faqRef.value); // Bir marta ishlagach to'xtaydi
      }
    },
    { threshold: 0.95 } // Sektsiyaning 15% qismi ekranda ko'rinsa ishlaydi
  );

  if (faqRef.value) {
    observer.observe(faqRef.value);
  }
});

onUnmounted(() => {
  if (observer && faqRef.value) {
    observer.unobserve(faqRef.value);
  }
});
</script>

<style scoped>
/* Skrol qilib kelganda elementlarning silliq chiqishi uchun */
.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>