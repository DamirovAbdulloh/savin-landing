<template>
  <!-- ref="categoriesRef" orqali sektsiyani skrolga kuzatamiz -->
  <section 
    ref="categoriesRef" 
    class="w-full bg-white py-8 px-4 sm:py-10 overflow-hidden"
  >
    <div class="max-w-3xl mx-auto text-center">
      <!-- Sarlavha animatsiyasi -->
      <h2 
        class="text-lg sm:text-xl font-bold text-gray-900 mb-5 opacity-0"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        {{ t("categories.title") }}
      </h2>

      <!-- Kategoriyalar ro'yxati -->
      <div class="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          v-for="(item, index) in t('categories.list')"
          :key="item.name"
          type="button"
          class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 active:scale-95 whitespace-nowrap opacity-0"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }"
        >
          <span class="text-sm sm:text-base leading-none">{{ item.icon }}</span>
          <span>{{ item.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();

// Skrolni kuzatish mantiqi
const categoriesRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        if (categoriesRef.value) observer.unobserve(categoriesRef.value); // Bir marta ishlaydi
      }
    },
    { threshold: 0.2 } // Blokning 20% qismi ekranda ko'ringanda ishga tushadi
  );

  if (categoriesRef.value) {
    observer.observe(categoriesRef.value);
  }
});

onUnmounted(() => {
  if (observer && categoriesRef.value) {
    observer.unobserve(categoriesRef.value);
  }
});
</script>

<style scoped>
/* Tugmalarni pastdan biroz tepaga va mayin chiqarish */
.animate-fade-in-up {
  animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>