<template>
    <div class="w-full bg-[#0b1f0f] py-10 px-6">
        <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="flex flex-col gap-1">
                <span class="text-3xl md:text-4xl font-bold text-[#5fe642] animate-pulse">
                    {{ t("statsBar.partners.value") }}
                </span>
                <span class="text-sm text-gray-400">{{ t("statsBar.partners.label") }}</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-3xl md:text-4xl font-bold text-[#5fe642] animate-pulse">
                    {{ t("statsBar.members.value") }}
                </span>
                <span class="text-sm text-gray-400">{{ t("statsBar.members.label") }}</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-3xl md:text-4xl font-bold text-[#5fe642] animate-pulse">
                    {{ t("statsBar.growth.value") }}
                </span>
                <span class="text-sm text-gray-400">{{ t("statsBar.growth.label") }}</span>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-3xl md:text-4xl font-bold text-[#5fe642] animate-pulse">
                    {{ t("statsBar.connectionTime.value") }}
                </span>
                <span class="text-sm text-gray-400">{{ t("statsBar.connectionTime.label") }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLanguage } from "../../i18n/useLanguage";

const { t } = useLanguage();
</script>