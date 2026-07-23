<template>
  <!-- ref="sectionRef" orqali butun sektsiyani kuzatamiz -->
  <section 
    ref="sectionRef" 
    class="w-full bg-white py-12 sm:py-16 px-4 overflow-hidden"
  >
    <div class="max-w-5xl mx-auto">
      <!-- Sarlavha: faqat isVisible true bo'lganda animatsiya ishlaydi -->
      <div 
        class="text-center mb-10 sm:mb-12 opacity-0"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <h2 class="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
          {{ t("benefits.title") }}
        </h2>
        <p class="mt-2 text-sm sm:text-base text-gray-500">
          {{ t("benefits.subtitle") }}
        </p>
      </div>

      <!-- Kartalar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div 
          v-for="(item, index) in t('benefits.items')" 
          :key="item.title"
          class="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out opacity-0"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: isVisible ? `${index * 120}ms` : '0ms' }"
        >
          <div class="flex-row items-start gap-4 p-5 sm:p-6 flex">
            <!-- Ikonka foni -->
            <div class="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 bg-[#DFF3E3] group-hover:scale-110 transition-transform duration-300 ease-out">
              <!-- v-html: ikonka emoji ham, inline SVG ham bo'lishi mumkin
                   (SVG currentColor orqali matn rangini oladi) -->
              <span
                class="text-xl sm:text-2xl text-emerald-700 inline-flex items-center justify-center"
                v-html="item.icon"
              ></span>
            </div>
            <div>
              <h3 class="font-semibold text-base sm:text-lg text-[#1A1A1A] mb-1">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-500 leading-relaxed">
                {{ item.description }}
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

// Skrolni kuzatish uchun o'zgaruvchilar
const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  // Ekranga 15% kirganda (threshold: 0.15) animatsiya ishga tushadi
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Animatsiya bir marta ishlagach, kuzatishni to'xtatamiz (resursni tejash uchun)
        if (sectionRef.value) observer.unobserve(sectionRef.value);
      }
    },
    { threshold: 0.75 } 
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  // Komponent o'chganda observerni tozalaymiz
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<style scoped>
/* Dastlabki holatda elementlar ko'rinmay turishi uchun opacity-0 ishlatildi */
.animate-fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>