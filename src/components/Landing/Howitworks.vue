<template>
    <!-- ref="howItWorksRef" orqali sektsiyani skrolga kuzatamiz -->
    <section 
        ref="howItWorksRef" 
        class="w-full bg-white py-16 px-6 overflow-hidden"
    >
        <div class="max-w-6xl mx-auto text-center">
            <!-- Sarlavha animatsiyasi -->
            <h2 
                class="text-3xl md:text-4xl font-bold text-gray-900 opacity-0"
                :class="{ 'animate-fade-in-up': isVisible }"
            >
                {{ t("howItWorks.title") }}
            </h2>
            <p 
                class="mt-3 text-gray-500 opacity-0"
                :class="{ 'animate-fade-in-up': isVisible }"
                :style="{ animationDelay: isVisible ? '100ms' : '0ms' }"
            >
                {{ t("howItWorks.subtitle") }}
            </p>

            <!-- Bosqichlar (Kartalar) tarmog'i -->
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div 
                    v-for="(step, i) in t('howItWorks.steps')" 
                    :key="i" 
                    class="group card bg-white border border-gray-200 shadow-sm rounded-xl transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-1 opacity-0"
                    :class="{ 'animate-fade-in-up': isVisible }"
                    :style="{ animationDelay: isVisible ? `${(i + 2) * 120}ms` : '0ms' }"
                >
                    <div class="card-body p-6">
                        <!-- Raqam doirasi: Hover bo'lganda bir oz kattalashadi va rangi o'zgaradi -->
                        <div
                            class="w-9 h-9 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold transition-all duration-300 group-hover:bg-green-600 group-hover:text-white group-hover:scale-110"
                        >
                            {{ step.number }}
                        </div>
                        <h3 class="mt-5 text-lg font-semibold text-gray-900">
                            {{ step.title }}
                        </h3>
                        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
                            {{ step.description }}
                        </p>
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

// Skrolni kuzatish mantiqi
const howItWorksRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                isVisible.value = true;
                if (howItWorksRef.value) observer.unobserve(howItWorksRef.value); // Bir marta ishlaydi
            }
        },
        { threshold: 0.15 } // Sektsiyaning 15% qismi ko'ringanda ishga tushadi
    );

    if (howItWorksRef.value) {
        observer.observe(howItWorksRef.value);
    }
});

onUnmounted(() => {
    if (observer && howItWorksRef.value) {
        observer.unobserve(howItWorksRef.value);
    }
});
</script>

<style scoped>
/* Mayin ko'tarilish animatsiyasi */
.animate-fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(25px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>