<template>
    <div class="w-full bg-[#0b1f0f] py-10 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div v-for="item in items" :key="item.key" class="flex flex-col gap-1">
                <span
                    class="text-3xl md:text-4xl font-bold text-[#5fe642]"
                    :class="{ 'animate-pulse': loading }"
                >
                    {{ item.value }}
                </span>
                <span class="text-sm text-gray-400">{{ item.label }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();

// Admin paneldagi haqiqiy ma'lumotlar shu ochiq endpointdan olinadi
// (avval bu raqamlar tarjima faylida qo'lda yozilgan edi).
// core ilovasi `/api/` ostida, landing esa `/api/v1` bilan ishlaydi.
const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";
const STATS_URL = API_BASE.replace(/\/api\/v1\/?$/, "/api") + "/public/stats/";

const stats = ref(null);
const loading = ref(true);

/** 5240 -> "5.2K+", 124 -> "124+" */
function compact(n) {
    const v = Number(n || 0);
    if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1).replace(/\.0$/, "")}M+`;
    if (v >= 1000) return `${(v / 1000).toFixed(1).replace(/\.0$/, "")}K+`;
    return `${v}+`;
}

const items = computed(() => {
    const s = stats.value;
    return [
        {
            key: "partners",
            // Ma'lumot kelmaguncha (yoki xatolik bo'lsa) tarjimadagi qiymat
            value: s ? compact(s.partners) : t("statsBar.partners.value"),
            label: t("statsBar.partners.label"),
        },
        {
            key: "members",
            value: s ? compact(s.members) : t("statsBar.members.value"),
            label: t("statsBar.members.label"),
        },
        {
            key: "growth",
            value: s
                ? `${s.growth_percent > 0 ? "+" : ""}${s.growth_percent}%`
                : t("statsBar.growth.value"),
            label: t("statsBar.growth.label"),
        },
        {
            // Ulanish muddati — va'da qilingan xizmat ko'rsatkichi, o'lchanmaydi
            key: "connectionTime",
            value: t("statsBar.connectionTime.value"),
            label: t("statsBar.connectionTime.label"),
        },
    ];
});

onMounted(async () => {
    try {
        const res = await fetch(STATS_URL);
        if (res.ok) stats.value = await res.json();
    } catch {
        // Backend javob bermasa tarjimadagi qiymatlar ko'rinaveradi
    } finally {
        loading.value = false;
    }
});
</script>
