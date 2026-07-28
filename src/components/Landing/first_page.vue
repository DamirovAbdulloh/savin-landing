<template>
  <Transition name="lang-fade" mode="out-in">
    <div class="bg-white min-h-screen" :key="lang">
      <header
        class="rounded-b-2xl sticky top-0 bg-white/40 backdrop-blur-md z-50"
      >
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div>
              <span
                class="flex justify-center items-center w-10 text-xl font-bold text-[#89EA5C] px-4 rounded-3xl"
                >{{ t("applyForm.brandName") }}</span
              >
            </div>

            <nav class="hidden md:flex items-center gap-8">
              <a
                href="#Howitworks"
                @click.prevent="scrollToSection('Howitworks')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.howItWorks") }}</a
              >

              <a
                href="#Afzalliklar"
                @click.prevent="scrollToSection('Afzalliklar')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.benefits") }}</a
              >

              <a
                href="#KopSoraladiganSavollar"
                @click.prevent="scrollToSection('KopSoraladiganSavollar')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.faq") }}</a
              >
            </nav>

            <div class="flex items-center gap-2 sm:gap-4">
              <!-- Til tanlash: desktop -->
              <div
                class="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-1"
              >
                <button
                  v-for="l in availableLangs"
                  :key="l"
                  @click="setLang(l)"
                  :class="[
                    'px-3 sm:px-3.5 py-1 cursor-pointer sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300',
                    lang === l
                      ? 'bg-lime-400  shadow-md'
                      : 'text-black hover:text-black',
                  ]"
                >
                  {{ l.toUpperCase() }}
                </button>
              </div>

              <RouterLink
                to="ariza"
                class="bg-lime-400 hover:bg-lime-500 text-white font-semibold px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm transition-colors whitespace-nowrap"
              >
                {{ t("nav.applyButton") }}
              </RouterLink>

              <button
                class="md:hidden text-gray-600 p-1"
                @click="mobileMenuOpen = !mobileMenuOpen"
                aria-label="Menyu"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Transition name="mobile-nav">
            <nav
              v-if="mobileMenuOpen"
              class="md:hidden pb-4 flex flex-col gap-3"
            >
              <a
                href="#Howitworks"
                @click.prevent="scrollToSection('Howitworks')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.howItWorks") }}</a
              >

              <a
                href="#Afzalliklar"
                @click.prevent="scrollToSection('Afzalliklar')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.benefits") }}</a
              >

              <a
                href="#KopSoraladiganSavollar"
                @click.prevent="scrollToSection('KopSoraladiganSavollar')"
                class="text-gray-700 hover:text-gray-900 text-sm font-medium"
                >{{ t("nav.faq") }}</a
              >

              <!-- Til tanlash: mobil -->
              <div
                class="relative flex items-center bg-gray-100 rounded-full p-1 mt-2 self-start"
              >
                <span
                  class="absolute top-1 bottom-1 rounded-full bg-white shadow-sm transition-all duration-300 ease-out"
                  :style="mobileLangIndicatorStyle"
                ></span>
                <button
                  v-for="l in availableLangs"
                  :key="l"
                  ref="mobileLangBtnRefs"
                  :data-lang="l"
                  @click="setLang(l)"
                  :class="[
                    'relative z-10 px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-300 whitespace-nowrap',
                    lang === l ? 'text-gray-900' : 'text-gray-400',
                  ]"
                >
                  {{ l.toUpperCase() }}
                </button>
              </div>
            </nav>
          </Transition>
        </div>
      </header>
      <main class="bg-[#F7FFF3] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div
          class="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
        >
          <!-- Left Content -->
          <div
            class="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div>
              <p
                class="text-lime-500 text-sm font-semibold tracking-wide uppercase mb-3 sm:mb-4"
              >
                {{ t("hero.badge") }}
              </p>
              <h1
                class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight min-h-[3.6em] sm:min-h-[2.6em] lg:min-h-[2.4em]"
              >
                {{ typedTitle }}<span class="typing-cursor">|</span>
              </h1>
            </div>

            <p
              class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 min-h-[3em]"
            >
              {{ typedDescription
              }}<span
                v-if="
                  typedDescription &&
                  typedDescription.length < t('hero.description').length
                "
                class="typing-cursor"
                >|</span
              >
            </p>

            <div
              class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <RouterLink
                to="ariza"
                class="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-colors text-center"
              >
                {{ t("hero.applyButton") }}
              </RouterLink>
              <button
                @click="scrollToSection('Howitworks')"
                class="text-lime-600 hover:text-lime-700 font-semibold flex items-center justify-center gap-2"
              >
                {{ t("hero.howItWorksButton") }}
                <span>→</span>
              </button>
            </div>

            <div
              class="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 pt-4 justify-center lg:justify-start"
            >
              <div
                class="flex items-center gap-2 justify-center lg:justify-start"
              >
                <svg
                  class="w-5 h-5 text-lime-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700 text-sm">{{
                  t("hero.stats.partners")
                }}</span>
              </div>
              <div
                class="flex items-center gap-2 justify-center lg:justify-start"
              >
                <svg
                  class="w-5 h-5 text-lime-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700 text-sm">{{
                  t("hero.stats.members")
                }}</span>
              </div>
              <div
                class="flex items-center gap-2 justify-center lg:justify-start"
              >
                <svg
                  class="w-5 h-5 text-lime-500 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-700 text-sm">{{
                  t("hero.stats.free")
                }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center order-1 lg:order-2">
            <div
              class="relative w-full max-w-[280px] sm:max-w-sm phone-enter"
              :class="phoneVisible ? 'phone-enter-active' : ''"
            >
              <!-- Phone Frame -->
              <div class="bg-black rounded-3xl p-2 shadow-2xl phone-float">
                <div class="bg-white rounded-3xl overflow-hidden">
                  <!-- Phone Status Bar -->
                  <div
                    class="bg-white px-4 py-2 flex justify-between items-center text-xs font-semibold text-gray-900"
                  >
                    <span></span>
                    <span>{{ t("phoneMock.time") }}</span>
                    <span></span>
                  </div>

                  <div
                    class="bg-gradient-to-b from-gray-50 to-white p-4 space-y-3 min-h-96"
                  >
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-2">
                      <button class="text-gray-600">‹</button>
                      <h2 class="text-lg font-bold text-gray-900">
                        {{ t("phoneMock.category") }}
                      </h2>
                      <span></span>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-3">
                      <span
                        class="bg-lime-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full"
                        >{{ t("phoneMock.filterNearby") }}</span
                      >
                      <span class="text-gray-600 text-xs self-center">{{
                        t("phoneMock.filterTopRated")
                      }}</span>
                    </div>

                    <p class="text-gray-700 text-xs font-medium">
                      {{ t("phoneMock.resultsCount") }}
                    </p>

                    <div class="space-y-3 mt-4">
                      <div
                        v-for="(business, idx) in t('phoneMock.businesses')"
                        :key="idx"
                        class="bg-white rounded-xl p-3 shadow-sm card-pop"
                        :style="{ animationDelay: idx * 120 + 300 + 'ms' }"
                      >
                        <div class="flex gap-3">
                          <div
                            class="w-12 h-12 shrink-0 bg-lime-400 rounded-xl flex items-center justify-center font-bold text-gray-900"
                            :class="
                              idx === 1
                                ? 'bg-purple-500 text-white'
                                : idx === 2
                                  ? 'bg-orange-400'
                                  : ''
                            "
                          >
                            {{ business.name.charAt(0) }}
                          </div>
                          <div class="flex-1 min-w-0">
                            <h3
                              class="font-semibold text-gray-900 text-sm truncate"
                            >
                              {{ business.name }}
                            </h3>
                            <p class="text-gray-600 text-xs truncate">
                              {{ business.location }} • {{ business.distance }}
                            </p>
                            <div class="flex items-center gap-1 mt-1">
                              <span
                                class="text-xs font-semibold text-gray-900"
                                >{{ business.rating }}</span
                              >
                              <span class="text-gray-500 text-xs"
                                >• {{ business.time }}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex justify-around items-center mt-6 pt-4 border-t border-gray-200 text-gray-600"
                    >
                      <button class="flex flex-col items-center gap-1">
                        <svg
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                        </svg>
                        <span class="text-xs">{{
                          t("phoneMock.navBar.main")
                        }}</span>
                      </button>
                      <button class="flex flex-col items-center gap-1">
                        <svg
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H3V5h12v4z"
                          />
                        </svg>
                        <span class="text-xs">{{
                          t("phoneMock.navBar.catalog")
                        }}</span>
                      </button>
                      <button class="flex flex-col items-center gap-1">
                        <div
                          class="w-6 h-6 bg-lime-400 rounded text-gray-900 flex items-center justify-center"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"
                            />
                          </svg>
                        </div>
                        <span class="text-xs">{{
                          t("phoneMock.navBar.chat")
                        }}</span>
                      </button>
                      <button class="flex flex-col items-center gap-1">
                        <svg
                          class="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                          />
                        </svg>
                        <span class="text-xs">{{
                          t("phoneMock.navBar.profile")
                        }}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StatsBar />

      <!-- Tartib yuqoridagi menyu bilan bir xil: avval "Qanday ishlaydi",
           keyin "Afzalliklar" (Nega Savin) -->
      <HowItworks id="Howitworks" />

      <NegaSavin id="Afzalliklar" />

      <KimlarUchun />

      <KopSoraladiganSavollar id="KopSoraladiganSavollar" />

      <ArizaQoldiring />

      <footer class="bg-gray-50 border-t border-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div
            class="flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <p class="text-sm text-gray-600">{{ t("footer.copyright") }}</p>
            <div class="flex gap-6">
              <a href="#" class="text-sm text-gray-600 hover:text-gray-900">{{
                t("footer.offer")
              }}</a>
              <a href="#" class="text-sm text-gray-600 hover:text-gray-900">{{
                t("footer.privacyPolicy")
              }}</a>

              <a
                :href="`https://t.me/${t('footer.telegram').replace('@', '')}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-lime-600 hover:text-lime-700 font-medium"
                >{{ t("footer.telegram") }}</a
              >
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from "vue";
import { useLanguage } from "../../i18n/useLanguage";
import StatsBar from "../../components/Landing/Statsbar.vue";
import HowItworks from "../../components/Landing/Howitworks.vue";
import KimlarUchun from "../../components/Landing/KimlarUchun (1).vue";
import NegaSavin from "../../components/Landing/NegaSavin.vue";
import KopSoraladiganSavollar from "../../components/Landing/KopSoraladiganSavollar.vue";
import ArizaQoldiring from "../../components/Landing/ArizaQoldiring.vue";

const { t, lang, setLang, availableLangs } = useLanguage();
const mobileMenuOpen = ref(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 70;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
  mobileMenuOpen.value = false;
};

// ---------------- Til toggle indikatori (dinamik, n ta til uchun) ----------------
const langBtnRefs = ref([]);
const mobileLangBtnRefs = ref([]);
const langIndicatorStyle = ref({});
const mobileLangIndicatorStyle = ref({});

function updateIndicator(refsArr, styleRef) {
  // MUHIM: Vue 3'da v-for ichidagi template ref massivi render tartibida
  // bo'lishi kafolatlanmaydi — indeks bo'yicha olish noto'g'ri tugmani
  // tanlab, oq indikator boshqa til ustida qolib ketardi (sayt RU, pill UZ).
  // Shuning uchun tugma data-lang atributi bo'yicha topiladi.
  const btn = refsArr.value?.find?.((b) => b?.dataset?.lang === lang.value);
  if (!btn) return;
  styleRef.value = {
    left: btn.offsetLeft + "px",
    width: btn.offsetWidth + "px",
  };
}

async function updateIndicators() {
  await nextTick();
  updateIndicator(langBtnRefs, langIndicatorStyle);
  updateIndicator(mobileLangBtnRefs, mobileLangIndicatorStyle);
}

onMounted(updateIndicators);
watch(lang, updateIndicators);
watch(mobileMenuOpen, (open) => {
  if (open) updateIndicators();
});

const typedTitle = ref("");
const typedDescription = ref("");

function typeText(fullText, targetRef, speed = 18) {
  targetRef.value = "";
  let i = 0;
  const interval = setInterval(() => {
    targetRef.value += fullText.charAt(i);
    i++;
    if (i >= fullText.length) clearInterval(interval);
  }, speed);
}

function runTypewriter() {
  typeText(t("hero.title"), typedTitle, 20);
  setTimeout(
    () => {
      typeText(t("hero.description"), typedDescription, 8);
    },
    t("hero.title").length * 20 + 150,
  );
}

onMounted(runTypewriter);
watch(lang, () => {
  runTypewriter();
});

const phoneVisible = ref(false);
onMounted(() => {
  setTimeout(() => (phoneVisible.value = true), 200);
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

button {
  transition: background-color 150ms ease-in-out;
}

a {
  transition: color 150ms ease-in-out;
}

.lang-fade-enter-active,
.lang-fade-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.lang-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.lang-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.typing-cursor {
  display: inline-block;
  margin-left: 2px;
  color: #84cc16;
  animation: blink-cursor 0.9s steps(1) infinite;
}

@keyframes blink-cursor {
  0%,
  50% {
    opacity: 1;
  }

  51%,
  100% {
    opacity: 0;
  }
}

.phone-enter {
  opacity: 0;
  transform: translateY(40px) scale(0.96);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.phone-enter-active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.phone-float {
  animation: float-phone 4.5s ease-in-out infinite;
}

@keyframes float-phone {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.card-pop {
  opacity: 0;
  transform: translateY(14px);
  animation: card-pop-in 0.5s ease forwards;
}

@keyframes card-pop-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
