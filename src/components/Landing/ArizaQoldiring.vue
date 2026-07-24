<template>
  <!-- ============ ASOSIY SEKTSIYA ============ -->
  <section
    ref="sectionRef"
    :class="[
      'relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-green-900 to-green-600   transition-all duration-1000 ease-out transform',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <!-- Dekorativ fon elementlari -->
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <div
        class="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        class="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl"
      />
      <div
        class="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl"
      />
    </div>

    <div
      class="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8 flex flex-col min-h-screen"
    >
      <!-- ============ YUQORI PANEL: Back + Til ============ -->
      <div class="mb-4 sm:mb-6 flex justify-between items-center gap-3">
        <a
          href="/"
          class="group inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 border border-white/10"
        >
          <span
            class="transition-transform duration-300 group-hover:-translate-x-0.5"
            >←</span
          >
          {{ t("applyForm.back") }}
        </a>

        <div
          class="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full p-1"
        >
          <button
            v-for="l in availableLangs"
            :key="l"
            @click="setLang(l)"
            :class="[
              'px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300',
              lang === l
                ? 'bg-white text-emerald-900 shadow-md'
                : 'text-white/60 hover:text-white',
            ]"
          >
            {{ l.toUpperCase() }}
          </button>
        </div>
      </div>

      <!-- ============ ASOSIY KONTENT ============ -->
      <div
        v-if="!submitted"
        class="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-14 items-start lg:items-center"
      >
        <!-- ======= CHAP TARAF: Promo matn ======= -->
        <div
          :class="[
            'text-white transition-all duration-700 delay-200 transform',
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-10',
          ]"
        >
          <div
            class="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/20 text-emerald-300 text-[11px] sm:text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4 sm:mb-5"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
              />
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"
              />
            </span>
            {{ tt("applyForm.badge", "Hamkorlik uchun ariza") }}
          </div>

          <h2
            class="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 sm:mb-4"
          >
            {{ t("applyForm.title1") }}
          </h2>
          <p
            class="text-sm sm:text-base text-white/60 leading-relaxed mb-6 sm:mb-8 max-w-md"
          >
            {{ t("applyForm.subtitle") }}
          </p>

          <!-- Kontaktlar: mobil'da gorizontal chiplar, desktopda vertikal ro'yxat -->
          <div
            class="flex flex-row lg:flex-col flex-wrap gap-2.5 lg:gap-3 text-sm"
          >
            <a
              :href="`tel:${t('applyForm.contacts.phone')}`"
              class="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl lg:rounded-2xl px-3.5 py-2.5 lg:px-4 lg:py-3 transition-all duration-300 hover:translate-x-0 lg:hover:translate-x-1"
            >
              <span
                class="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-emerald-500/15 text-base shrink-0"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M0 0h512v512H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                  />
                </svg>
              </span>
              <span
                class="text-white/80 group-hover:text-white transition-colors"
              >
                {{ t("applyForm.contacts.phone") }}
              </span>
            </a>
            <a
              href="#"
              class="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl lg:rounded-2xl px-3.5 py-2.5 lg:px-4 lg:py-3 transition-all duration-300 hover:translate-x-0 lg:hover:translate-x-1"
            >
              <span
                class="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-emerald-500/15 text-base shrink-0"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="currentColor"
                    d="M20.56 3.91c.59.59.59 1.54 0 2.12l-3.89 3.89l2.12 9.19l-1.41 1.42l-3.88-7.43L9.6 17l.36 2.47l-1.07 1.06l-1.76-3.18l-3.19-1.77L5 14.5l2.5.37L11.37 11L3.94 7.09l1.42-1.41l9.19 2.12l3.89-3.89c.56-.58 1.56-.58 2.12 0"
                  />
                </svg>
              </span>
              <span
                class="text-white/80 group-hover:text-white transition-colors"
              >
                {{ t("applyForm.contacts.telegram") }}
              </span>
            </a>
            <a
              :href="`mailto:${t('applyForm.contacts.email')}`"
              class="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl lg:rounded-2xl px-3.5 py-2.5 lg:px-4 lg:py-3 transition-all duration-300 hover:translate-x-0 lg:hover:translate-x-1"
            >
              <span
                class="flex items-center justify-center w-8 h-8 lg:w-9 lg:h-9 rounded-lg lg:rounded-xl bg-emerald-500/15 text-base shrink-0"
                ><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" clip-rule="evenodd" />
</svg>
</span
              >
              <span
                class="text-white/80 group-hover:text-white transition-colors"
              >
                {{ t("applyForm.contacts.email") }}
              </span>
            </a>
          </div>
        </div>

        <!-- ======= O'NG TARAF: Ko'p bosqichli forma ======= -->
        <div
          :class="[
            'bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/20 p-4 sm:p-6 lg:p-8 transition-all duration-700 delay-400 transform flex flex-col',
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10',
          ]"
        >
          <!-- ---- Stepper: mobil (progress bar) ---- -->
          <div class="sm:hidden mb-5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-semibold text-gray-900">
                {{ stepLabels[currentStep - 1] }}
              </span>
              <span class="text-xs font-medium text-gray-400">
                {{ currentStep }}/{{ stepLabels.length }}
              </span>
            </div>
            <div class="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                class="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-500 ease-out"
                :style="{ width: progressPercent + '%' }"
              />
            </div>
          </div>

          <!-- ---- Stepper: desktop (doirachalar) ---- -->
          <div class="hidden sm:flex items-center mb-6 lg:mb-7">
            <template v-for="(step, i) in stepLabels" :key="step">
              <div class="flex flex-col items-center shrink-0">
                <div
                  class="w-9 h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500"
                  :class="{
                    'bg-emerald-500 text-white shadow-md shadow-emerald-500/30':
                      i + 1 < currentStep,
                    'bg-emerald-600 text-white ring-4 ring-emerald-100 scale-110 shadow-lg shadow-emerald-600/30':
                      i + 1 === currentStep,
                    'bg-gray-100 text-gray-400': i + 1 > currentStep,
                  }"
                >
                  <span v-if="i + 1 < currentStep">✓</span>
                  <span v-else>{{ i + 1 }}</span>
                </div>
                <span
                  class="mt-2 text-[11px] lg:text-xs whitespace-nowrap transition-all duration-300"
                  :class="
                    i + 1 === currentStep
                      ? 'text-gray-900 font-semibold'
                      : 'text-gray-400'
                  "
                >
                  {{ step }}
                </span>
              </div>
              <div
                v-if="i < stepLabels.length - 1"
                class="flex-1 h-0.5 mx-2 lg:mx-3 mb-5 rounded-full transition-all duration-500"
                :class="
                  i + 1 < currentStep
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-400'
                    : 'bg-gray-200'
                "
              />
            </template>
          </div>

          <p class="text-[11px] sm:text-xs text-gray-400 mb-4 sm:mb-5">
            {{ t("applyForm.requiredNote") }}
          </p>

          <!-- ---- Bosqich maydonlari ---- -->
          <div class="relative flex-1 min-h-0">
            <Transition name="fade-slide" mode="out-in">
              <!-- ======== 1-BOSQICH: Biznes ======== -->
              <div
                v-if="currentStep === 1"
                key="step1"
                class="flex flex-col gap-4"
              >
                <div>
                  <label :class="labelClass">
                    {{ t("applyForm.step1Fields.businessName") }}
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Masalan: Baraka Restoran"
                    :class="fieldClass('name')"
                  />
                  <p v-if="fieldErrors.name" :class="errorClass">
                    {{ fieldErrors.name }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step1Fields.category") }}
                    </label>
                    <select
                      v-model="form.category"
                      :class="fieldClass('category', true)"
                    >
                      <option value="">
                        {{ t("applyForm.step1Fields.categoryPlaceholder") }}
                      </option>
                      <option
                        v-for="cat in categories"
                        :key="cat.id"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.category" :class="errorClass">
                      {{ fieldErrors.category }}
                    </p>
                  </div>
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step1Fields.businessType") }}
                    </label>
                    <select
                      v-model="form.type"
                      :class="fieldClass('type', true)"
                    >
                      <option value="">
                        {{ t("applyForm.step1Fields.businessTypePlaceholder") }}
                      </option>
                      <option
                        v-for="tp in businessTypeOptions"
                        :key="tp.value"
                        :value="tp.value"
                      >
                        {{ tp.label }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.type" :class="errorClass">
                      {{ fieldErrors.type }}
                    </p>
                  </div>
                </div>

                <div>
                  <label :class="labelClass">
                    {{ t("applyForm.step1Fields.responsiblePerson") }}
                  </label>
                  <input
                    v-model="form.contact"
                    type="text"
                    placeholder="To'liq ism sharif"
                    :class="fieldClass('contact')"
                  />
                  <p v-if="fieldErrors.contact" :class="errorClass">
                    {{ fieldErrors.contact }}
                  </p>
                </div>

                <div>
                  <label :class="labelClass">
                    {{ t("applyForm.step1Fields.aboutBusiness") }}
                  </label>
                  <textarea
                    v-model="form.about"
                    rows="2"
                    placeholder="Faoliyatingiz haqida 1-2 jumla..."
                    :class="fieldClass('about') + ' resize-none'"
                  />
                  <p v-if="fieldErrors.about" :class="errorClass">
                    {{ fieldErrors.about }}
                  </p>
                </div>
              </div>

              <!-- ======== 2-BOSQICH: Kontakt ======== -->
              <div
                v-else-if="currentStep === 2"
                key="step2"
                class="flex flex-col gap-4"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step2Fields.phone") }}
                    </label>
                    <input
                      v-model="form.phone"
                      type="tel"
                      inputmode="tel"
                      placeholder="+998 90 000 00 00"
                      :class="fieldClass('phone')"
                    />
                    <p v-if="fieldErrors.phone" :class="errorClass">
                      {{ fieldErrors.phone }}
                    </p>
                  </div>
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step2Fields.email") }}
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      inputmode="email"
                      placeholder="info@biznes.uz"
                      :class="fieldClass('email')"
                    />
                    <p v-if="fieldErrors.email" :class="errorClass">
                      {{ fieldErrors.email }}
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step2Fields.instagram") }}
                    </label>
                    <input
                      v-model="form.instagram"
                      type="text"
                      placeholder="@biznes.uz"
                      :class="fieldClass()"
                    />
                  </div>
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step2Fields.telegramChannel") }}
                    </label>
                    <input
                      v-model="form.telegram"
                      type="text"
                      placeholder="t.me/biznes.uz"
                      :class="fieldClass()"
                    />
                  </div>
                </div>

                <div>
                  <label :class="labelClass">
                    {{ t("applyForm.step2Fields.website") }}
                  </label>
                  <input
                    v-model="form.website"
                    type="text"
                    inputmode="url"
                    placeholder="www.biznes.uz"
                    :class="fieldClass()"
                  />
                </div>
              </div>

              <!-- ======== 3-BOSQICH: Joylashuv ======== -->
              <div
                v-else-if="currentStep === 3"
                key="step3"
                class="flex flex-col gap-4"
              >
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <!-- Viloyat -->
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step3Fields.region") }}
                    </label>
                    <select
                      v-model="form.viloyat"
                      :class="fieldClass('viloyat', true)"
                    >
                      <option value="">Tanlang</option>
                      <option
                        v-for="v in viloyatOptions"
                        :key="v.value"
                        :value="v.value"
                      >
                        {{ v.label }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.viloyat" :class="errorClass">
                      {{ fieldErrors.viloyat }}
                    </p>
                  </div>

                  <!-- Tuman: viloyatga qarab dinamik -->
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step3Fields.cityDistrict") }}
                    </label>
                    <select
                      v-model="form.tuman"
                      :disabled="!form.viloyat"
                      :class="
                        fieldClass('tuman', true) +
                        ' disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed'
                      "
                    >
                      <option value="">
                        {{
                          form.viloyat ? "Tanlang" : "Avval viloyatni tanlang"
                        }}
                      </option>
                      <option v-for="tm in tumanOptions" :key="tm" :value="tm">
                        {{ tm }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.tuman" :class="errorClass">
                      {{ fieldErrors.tuman }}
                    </p>
                  </div>
                </div>

                <!-- To'liq manzil + qidiruv -->
                <div>
                  <label :class="labelClass">
                    {{ t("applyForm.step3Fields.fullAddress") }}
                  </label>
                  <div class="flex gap-2">
                    <input
                      v-model="form.address"
                      type="text"
                      :placeholder="
                        t('applyForm.step3Fields.fullAddressPlaceholder')
                      "
                      @keydown.enter.prevent="searchAddressOnMap"
                      :class="fieldClass('address')"
                    />
                    <button
                      type="button"
                      @click="searchAddressOnMap"
                      :disabled="isSearchingAddress"
                      class="shrink-0 inline-flex items-center justify-center w-11 sm:w-12 rounded-xl bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-base transition-all duration-300 active:scale-95 shadow-md shadow-emerald-600/25 disabled:opacity-60"
                      :title="
                        tt(
                          'applyForm.step3Fields.searchOnMap',
                          'Xaritadan qidirish',
                        )
                      "
                    >
                      <span
                        v-if="isSearchingAddress"
                        class="animate-spin text-sm"
                        >⏳</span
                      >
                      <span v-else>🔍</span>
                    </button>
                  </div>
                  <p v-if="fieldErrors.address" :class="errorClass">
                    {{ fieldErrors.address }}
                  </p>
                </div>

                <!-- Xarita -->
                <div>
                  <label :class="labelClass">
                    {{
                      tt(
                        "applyForm.step3Fields.mapLabel",
                        "Xaritada aniq joylashuvni belgilang *",
                      )
                    }}
                  </label>
                  <div
                    :class="[
                      'relative w-full h-48 sm:h-56 lg:h-64 rounded-xl sm:rounded-2xl border overflow-hidden bg-gray-50 transition-all duration-300',
                      fieldErrors.location
                        ? 'border-red-400 ring-2 ring-red-400/20'
                        : 'border-gray-200',
                    ]"
                  >
                    <div ref="mapRef" class="absolute inset-0" />
                    <!-- Xarita yuklanayotganda skeleton -->
                    <div
                      v-if="!mapReady"
                      class="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-50"
                    >
                      <span class="text-2xl animate-pulse">🗺️</span>
                      <span class="text-xs text-gray-400">
                        {{
                          tt(
                            "applyForm.step3Fields.mapLoading",
                            "Xarita yuklanmoqda...",
                          )
                        }}
                      </span>
                    </div>
                  </div>

                  <p
                    v-if="foundAddress"
                    class="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 mt-2 flex items-start gap-1.5"
                  >
                    <span class="shrink-0">📍</span>
                    <span>{{ foundAddress }}</span>
                  </p>
                  <p class="text-[11px] sm:text-xs text-gray-400 mt-1.5">
                    {{
                      tt(
                        "applyForm.step3Fields.mapHint",
                        "Markerni surib yoki xaritaga bosib binoyingizning aniq joyini belgilang.",
                      )
                    }}
                  </p>
                  <p v-if="fieldErrors.location" :class="errorClass">
                    {{ fieldErrors.location }}
                  </p>
                </div>

                <!-- Ish kunlari va ish vaqti -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step3Fields.workingDays") }}
                    </label>
                    <select
                      v-model="form.ish_kunlari"
                      :class="fieldClass('ish_kunlari', true)"
                    >
                      <option value="">Tanlang</option>
                      <option
                        v-for="k in ishKunlariOptions"
                        :key="k.value"
                        :value="k.value"
                      >
                        {{ k.label }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.ish_kunlari" :class="errorClass">
                      {{ fieldErrors.ish_kunlari }}
                    </p>
                  </div>

                  <!-- User o'zi kiritadigan ish vaqti -->
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step3Fields.workingHours") }}
                    </label>
                    <div class="flex items-center gap-2">
                      <input
                        v-model="form.ish_vaqti_from"
                        type="time"
                        :class="fieldClass('ish_vaqti') + ' text-center'"
                      />
                      <span class="text-gray-300 font-medium shrink-0">—</span>
                      <input
                        v-model="form.ish_vaqti_to"
                        type="time"
                        :class="fieldClass('ish_vaqti') + ' text-center'"
                      />
                    </div>
                    <p v-if="fieldErrors.ish_vaqti" :class="errorClass">
                      {{ fieldErrors.ish_vaqti }}
                    </p>
                  </div>
                </div>

                <div
                  class="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] sm:text-xs px-3.5 py-3 rounded-xl flex items-start gap-2"
                >
                  <span class="shrink-0">💡</span>
                  <span>{{ t("applyForm.step3Fields.locationNote") }}</span>
                </div>
              </div>

              <!-- ======== 4-BOSQICH: Chegirma ======== -->
              <div
                v-else-if="currentStep === 4"
                key="step4"
                class="flex flex-col gap-4"
              >
                <div>
                  <label :class="labelClass + ' mb-2'">
                    {{ t("applyForm.step4Fields.discountPercent") }}
                  </label>
                  <div
                    :class="[
                      'flex flex-wrap gap-2 rounded-xl transition-all',
                      fieldErrors.discount
                        ? 'ring-2 ring-red-400/30 p-1.5'
                        : '',
                    ]"
                  >
                    <button
                      v-for="opt in discountOptions"
                      :key="opt.val"
                      type="button"
                      @click="form.discount = opt.val"
                      :class="[
                        'px-4 sm:px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 border transform active:scale-95',
                        form.discount === opt.val
                          ? 'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white border-emerald-600 scale-105 shadow-md shadow-emerald-600/25'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-700',
                      ]"
                    >
                      {{ opt.label }}
                    </button>
                  </div>
                  <!-- Erkin foiz: biznes egasi o'zi xohlagan foizni yozishi mumkin -->
                  <div class="mt-2.5 flex items-center gap-2">
                    <span class="text-[11px] sm:text-xs text-gray-500">
                      {{ t("applyForm.step4Fields.customDiscount") }}:
                    </span>
                    <div class="relative">
                      <input
                        v-model.number="form.discount"
                        type="number"
                        min="5"
                        max="100"
                        inputmode="numeric"
                        class="w-24 rounded-full border border-gray-200 bg-white px-4 py-1.5 pr-8 text-sm font-semibold text-emerald-700 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all"
                      />
                      <span
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none"
                        >%</span
                      >
                    </div>
                  </div>
                  <p class="text-[11px] sm:text-xs text-gray-400 mt-1.5">
                    {{ t("applyForm.step4Fields.discountRecommendation") }}
                  </p>
                  <p v-if="fieldErrors.discount" :class="errorClass">
                    {{ fieldErrors.discount }}
                  </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step4Fields.minPurchaseAmount") }}
                    </label>
                    <div class="relative">
                      <input
                        v-model.number="form.min_sum"
                        type="number"
                        inputmode="numeric"
                        placeholder="50 000"
                        :class="fieldClass('min_sum') + ' pr-14'"
                      />
                      <span
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium pointer-events-none"
                        >so'm</span
                      >
                    </div>
                    <p v-if="fieldErrors.min_sum" :class="errorClass">
                      {{ fieldErrors.min_sum }}
                    </p>
                  </div>
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step4Fields.additionalType") }}
                    </label>
                    <select
                      v-model="form.additional_type"
                      :class="fieldClass('additional_type', true)"
                    >
                      <option value="">Tanlang</option>
                      <option
                        v-for="a in additionalTypeOptions"
                        :key="a.value"
                        :value="a.value"
                      >
                        {{ a.label }}
                      </option>
                    </select>
                    <p v-if="fieldErrors.additional_type" :class="errorClass">
                      {{ fieldErrors.additional_type }}
                    </p>
                  </div>
                </div>

                <!-- Biznes panel kirish ma'lumotlari (login + parol) -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step4Fields.panelLogin") }}
                    </label>
                    <input
                      v-model="form.panel_login"
                      type="email"
                      autocomplete="off"
                      placeholder="example@savin.uz"
                      :class="fieldClass('panel_login')"
                    />
                    <!-- Jonli bandlik holati -->
                    <p
                      v-if="loginCheckStatus === 'checking'"
                      class="text-[11px] sm:text-xs text-gray-400 mt-1"
                    >
                      {{ t("applyForm.step4Fields.panelLoginChecking") }}
                    </p>
                    <p
                      v-else-if="loginCheckStatus === 'available'"
                      class="text-[11px] sm:text-xs text-emerald-600 mt-1 flex items-center gap-1"
                    >
                      ✓ {{ t("applyForm.step4Fields.panelLoginAvailable") }}
                    </p>
                    <p
                      v-else-if="loginCheckStatus === 'taken'"
                      class="text-[11px] sm:text-xs text-red-600 mt-1 flex items-center gap-1"
                    >
                      ✗ {{ t("applyForm.step4Fields.panelLoginTaken") }}
                    </p>
                    <p
                      v-else
                      class="text-[11px] sm:text-xs text-gray-400 mt-1"
                    >
                      {{ t("applyForm.step4Fields.panelLoginHint") }}
                    </p>
                    <p v-if="fieldErrors.panel_login" :class="errorClass">
                      {{ fieldErrors.panel_login }}
                    </p>
                  </div>
                  <div>
                    <label :class="labelClass">
                      {{ t("applyForm.step4Fields.panelPassword") }}
                    </label>
                    <input
                      v-model="form.panel_password"
                      type="password"
                      autocomplete="new-password"
                      placeholder="••••••"
                      :class="fieldClass('panel_password')"
                    />
                    <p class="text-[11px] sm:text-xs text-gray-400 mt-1">
                      {{ t("applyForm.step4Fields.panelPasswordHint") }}
                    </p>
                    <p v-if="fieldErrors.panel_password" :class="errorClass">
                      {{ fieldErrors.panel_password }}
                    </p>
                  </div>
                </div>

                <div
                  class="bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] sm:text-xs px-3.5 py-3 rounded-xl flex items-start gap-2"
                >
                  <span class="shrink-0">✅</span>
                  <span>{{ t("applyForm.submitNote") }}</span>
                </div>
              </div>
            </Transition>
          </div>

          <!-- ---- Umumiy xatolik xabari ---- -->
          <Transition name="fade-slide">
            <p
              v-if="errorMessage"
              class="text-xs text-red-600 bg-red-50 border border-red-100 rounded-xl px-3.5 py-2.5 mt-4 flex items-start gap-2"
            >
              <span class="shrink-0">⚠️</span>
              <span>{{ errorMessage }}</span>
            </p>
          </Transition>

          <!-- ---- Pastki navigatsiya ---- -->
          <div
            class="flex items-center justify-between gap-3 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100"
          >
            <button
              v-if="currentStep > 1"
              type="button"
              @click="prevStep"
              :disabled="isSubmitting"
              class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-full px-4 py-2.5 transition-all duration-200 disabled:opacity-50"
            >
              ← {{ t("applyForm.back") }}
            </button>
            <span v-else />

            <span class="hidden sm:inline text-xs text-gray-400">
              {{ currentStep }}/{{ stepLabels.length }}
              {{ t("applyForm.step") }}
            </span>

            <button
              type="button"
              @click="nextStep"
              :disabled="isSubmitting"
              class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-sm font-semibold px-6 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 transform active:scale-95 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span
                v-if="isSubmitting"
                class="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
              />
              <template v-else>
                {{
                  currentStep < stepLabels.length
                    ? t("applyForm.nextButton")
                    : t("applyForm.done")
                }}
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:translate-x-0.5"
                  >→</span
                >
              </template>
            </button>
          </div>
        </div>
      </div>

      <!-- ============ MUVAFFAQIYAT EKRANI ============ -->
      <div v-else class="flex-1 flex items-center justify-center py-10">
        <div class="animate-bounce-in w-full max-w-md">
          <div
            class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/20 p-6 sm:p-10 text-center overflow-hidden"
          >
            <!-- Yuqori dekorativ chiziq -->
            <div
              class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400"
            />
          
            <div
              class="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center mb-5 animate-scale-up shadow-xl shadow-emerald-500/30 ring-8 ring-emerald-50"
            >
              <span class="text-white text-3xl sm:text-4xl">✓</span>
            </div>

            <h3 class="text-xl sm:text-2xl text-slate-800 font-bold mb-2">
              {{ t("applyForm.title2") }}
            </h3>
            <p class="text-sm text-gray-500 leading-relaxed mb-5">
              {{ t("applyForm.subtitle") }}
            </p>

            <div
              class="flex flex-wrap items-center justify-center gap-2.5 mb-6"
            >
              <span
                class="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 text-slate-700 text-sm px-3.5 py-1.5 rounded-full"
              >
                {{ t("applyForm.num") }}
                <span class="font-mono font-bold text-emerald-700"
                  >#{{ applicationNumber }}</span
                >
              </span>
              <span
                class="bg-amber-50 border border-amber-100 text-amber-600 text-xs font-semibold px-3 py-1.5 rounded-full animate-pulse"
              >
                {{ t("applyForm.status") }}
              </span>
            </div>

            <p class="text-xs text-gray-400 mb-6 leading-relaxed">
              {{ t("applyForm.contact") }}
              <a
                :href="`https://t.me/${t('applyForm.contacts.telegram').replace('@', '')}`"
                target="_blank"
                rel="noopener noreferrer"
                class="text-emerald-600 font-medium hover:underline"
                >{{ t("applyForm.contacts.telegram") }}</a
              >
            </p>

            <button
              @click="resetForm"
              class="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 text-sm font-semibold py-3 rounded-xl transition-all duration-300 transform active:scale-[0.98]"
            >
              ← {{ t("applyForm.back") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  onMounted,
  onUnmounted,
} from "vue";
import { useLanguage } from "../../i18n/useLanguage";
import {
  REGION_OPTIONS,
  getDistricts,
  getRegionLabel,
  getRegionCenter,
} from "../../data/uzRegions";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Vite bilan Leaflet default marker rasm yo'llari to'g'ri build bo'lishi uchun
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const { t, lang, setLang, availableLangs } = useLanguage();

// i18n kaliti mavjud bo'lmasa fallback matn qaytaradigan yordamchi
function tt(key, fallback) {
  const v = t(key);
  return v && v !== key ? v : fallback;
}

// ---------------- Umumiy stil klasslari ----------------

const labelClass =
  "block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5";

const errorClass = "text-xs text-red-500 mt-1.5";

/**
 * Input/select uchun yagona stil generatori.
 * @param {string} [errorKey] - fieldErrors dagi kalit (xato holatini bo'yash uchun)
 * @param {boolean} [isSelect] - select bo'lsa matn rangi boshqacha
 */
function fieldClass(errorKey = "", isSelect = false) {
  const base =
    "w-full rounded-xl border bg-white px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 " +
    (isSelect ? "text-gray-700 appearance-none " : "text-slate-800 ");
  const state =
    errorKey && fieldErrors[errorKey]
      ? "border-red-400 focus:ring-red-400/30 focus:border-red-400"
      : "border-gray-200 hover:border-gray-300 focus:ring-emerald-500/30 focus:border-emerald-500";
  return base + state;
}

// ---------------- API sozlamalari ----------------

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";

function authHeaders(json = true, includeAuth = true) {
  const token = localStorage.getItem("access_token");
  const headers = {};
  if (json) headers["Content-Type"] = "application/json";
  if (includeAuth && token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

async function apiRequest(
  path,
  method = "GET",
  body = null,
  includeAuth = true,
) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: authHeaders(true, includeAuth),
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    localStorage.removeItem("access_token");
  }

  if (!res.ok) {
    let errData = {};
    try {
      errData = await res.json();
    } catch (e) {}
    const msg =
      errData.detail ||
      Object.values(errData).flat().join(" ") ||
      `Xatolik yuz berdi (${res.status})`;
    throw new Error(msg);
  }
  if (res.status === 204) return null;
  return res.json();
}

// ---------------- Holat (state) ----------------

const currentStep = ref(1);
const submitted = ref(false);
const applicationId = ref(null);
const applicationNumber = ref("");
const isSubmitting = ref(false);
const errorMessage = ref("");

const fieldErrors = reactive({
  name: "",
  category: "",
  type: "",
  contact: "",
  about: "",
  phone: "",
  email: "",
  viloyat: "",
  tuman: "",
  address: "",
  location: "",
  ish_kunlari: "",
  ish_vaqti: "",
  discount: "",
  min_sum: "",
  additional_type: "",
  panel_login: "",
  panel_password: "",
});

function clearFieldErrors(keys) {
  keys.forEach((k) => {
    fieldErrors[k] = "";
  });
}

const sectionRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(async () => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        if (sectionRef.value) observer.unobserve(sectionRef.value);
      }
    },
    { threshold: 0.1 },
  );
  if (sectionRef.value) observer.observe(sectionRef.value);

  try {
    const data = await apiRequest("/categories/");
    categories.value = Array.isArray(data) ? data : data.results || [];
  } catch (e) {
    console.error("Kategoriyalarni olishda xatolik:", e);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
  clearTimeout(addressDebounce);
  destroyMap();
});

const stepLabels = computed(() => [
  t("applyForm.steps.step1"),
  t("applyForm.steps.step2"),
  t("applyForm.steps.step3"),
  t("applyForm.steps.step4"),
]);

// Mobil progress bar uchun foiz
const progressPercent = computed(
  () => (currentStep.value / stepLabels.value.length) * 100,
);

const categories = ref([]);

const form = ref({
  name: "",
  category: "",
  type: "",
  contact: "",
  about: "",
  phone: "+998",
  email: "",
  instagram: "",
  telegram: "",
  website: "",
  viloyat: "",
  tuman: "",
  address: "",
  latitude: null,
  longitude: null,
  ish_kunlari: "",
  ish_vaqti_from: "09:00",
  ish_vaqti_to: "18:00",
  discount: 15,
  min_sum: 50000,
  additional_type: "",
  panel_login: "",
  panel_password: "",
});

const businessTypeOptions = [
  { value: "yatt", label: "YaTT" },
  { value: "mchj", label: "MCHJ" },
];

// Viloyatlar umumiy modul (uzRegions.js) dan olinadi —
// bu ma'lumotni boshqa sahifalarda ham import qilib ishlatish mumkin.
const viloyatOptions = REGION_OPTIONS;

// Tumanlar tanlangan viloyatga qarab dinamik hisoblanadi
const tumanOptions = computed(() => getDistricts(form.value.viloyat));

// Viloyat o'zgarsa — tanlangan tuman tozalanadi, xarita yangi markazga o'tadi
watch(
  () => form.value.viloyat,
  (val, old) => {
    if (val === old) return;
    form.value.tuman = "";
    if (mapInstance && form.value.latitude == null) {
      mapInstance.setView(getRegionCenter(val), 11);
    }
  },
);

const ishKunlariOptions = [
  { value: "mon_fri", label: "Dushanba - Juma" },
  { value: "mon_sat", label: "Dushanba - Shanba" },
  { value: "everyday", label: "Har kuni" },
];

const additionalTypeOptions = [
  { value: "fixed", label: "Barcha mahsulotlar" },
  { value: "min_purchase", label: "Minimal xarid summasi" },
];

const discountOptions = computed(() => {
  const vals = [5, 10, 15, 20, 25];
  const labels = t("applyForm.step4Fields.discountOptions");
  return vals.map((val, i) => ({ val, label: labels?.[i] ?? `${val}%` }));
});

// ---------------- Biznes panel logini: jonli bandlik tekshiruvi ----------------
// Login formati: example@savin.uz. Foydalanuvchi yozayotganda backend'dan
// bandligi so'raladi (debounce bilan) — band bo'lsa darhol ko'rsatiladi.
const PANEL_LOGIN_RE = /^[a-z0-9][a-z0-9._-]*@savin\.uz$/i;
const PANEL_PASSWORD_RE = /^[a-zA-Z0-9]{6,}$/;
const loginCheckStatus = ref(""); // "" | checking | available | taken | invalid
let loginCheckTimer = null;
let loginCheckSeq = 0;

watch(
  () => form.value.panel_login,
  (value) => {
    clearTimeout(loginCheckTimer);
    fieldErrors.panel_login = "";
    const login = (value || "").trim().toLowerCase();
    if (!login) {
      loginCheckStatus.value = "";
      return;
    }
    if (!PANEL_LOGIN_RE.test(login)) {
      loginCheckStatus.value = "invalid";
      return;
    }
    loginCheckStatus.value = "checking";
    const seq = ++loginCheckSeq;
    loginCheckTimer = setTimeout(async () => {
      try {
        const data = await apiRequest(
          `/applications/check-login/?login=${encodeURIComponent(login)}`,
        );
        if (seq !== loginCheckSeq) return; // eskirgan javob
        loginCheckStatus.value = data.available ? "available" : "taken";
      } catch (e) {
        if (seq !== loginCheckSeq) return;
        // Tekshirib bo'lmasa bloklamaymiz — yakuniy tekshiruv backend'da bor.
        loginCheckStatus.value = "";
      }
    }, 400);
  },
);

// ---------------- Xarita (OpenStreetMap + Leaflet, API key kerak emas) ----------------
// Avval Yandex Maps ishlatilgan edi, lekin API key olish muammo bo'lgani uchun
// bepul va keysiz OpenStreetMap (Leaflet) + Nominatim (geokodlash) ga o'tkazildi.
// Quyidagi funksiyalar (initMap/setLocation/reverseGeocode/searchAddressOnMap/
// destroyMap) atayin avvalgi Yandex versiyasi bilan bir xil nom va xatti-harakatni
// saqlaydi — shablon (template) va boshqa kod o'zgarishsiz ishlayveradi.

const NOMINATIM_BASE = "https://nominatim.openstreetmap.org";

const mapRef = ref(null);
const mapReady = ref(false);
const foundAddress = ref("");
const isSearchingAddress = ref(false);

let mapInstance = null;
let placemark = null;
let addressDebounce = null;

/** Foydalanuvchi joriy joylashuvini aniqlaydigan tugma (Yandex geolocationControl o'rniga) */
const LocateControl = L.Control.extend({
  options: { position: "topleft" },
  onAdd() {
    const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    const button = L.DomUtil.create("a", "", container);
    button.href = "#";
    button.title = "Joriy joylashuvim";
    button.innerHTML = "📍";
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.justifyContent = "center";
    button.style.fontSize = "16px";
    L.DomEvent.on(button, "click", (e) => {
      L.DomEvent.stop(e);
      if (!navigator.geolocation) return;
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const coords = [pos.coords.latitude, pos.coords.longitude];
          setLocation(coords, { pan: true });
          if (mapInstance) mapInstance.setZoom(16);
        },
        () => {},
        { enableHighAccuracy: true, timeout: 8000 },
      );
    });
    return container;
  },
});

/**
 * mapRef konteyneri DOM'ga qo'shilishini kutadi. <Transition mode="out-in">
 * ichida bo'lgani uchun bitta nextTick() yetarli bo'lmasligi mumkin (avvalgi
 * bosqichning chiqish animatsiyasi tugashini kutish kerak) — shu sabab bir
 * necha marta urinib ko'radi.
 */
async function waitForMapRef(maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    if (mapRef.value) return true;
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 30));
  }
  return false;
}

/** 3-bosqich ochilganda xaritani yaratadi */
async function initMap() {
  try {
    const found = await waitForMapRef();
    if (!found || !mapRef.value || mapInstance) return;

    const hasCoords = form.value.latitude != null;
    const center = hasCoords
      ? [form.value.latitude, form.value.longitude]
      : getRegionCenter(form.value.viloyat);

    mapInstance = L.map(mapRef.value, {
      center,
      zoom: hasCoords ? 16 : 11,
      zoomControl: false,
    });

    L.control.zoom({ position: "bottomleft" }).addTo(mapInstance);
    new LocateControl().addTo(mapInstance);

    // --- Sputnik (hybrid): satellit + ko'chalar + joy nomlari ---
    const satellite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics",
        maxZoom: 19,
      },
    );
    // Ko'chalar va yo'l nomlari (satellit ustiga overlay)
    const roads = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19 },
    );
    // Shahar/joy nomlari yozuvi
    const places = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19 },
    );
    const hybrid = L.layerGroup([satellite, roads, places]);

    // --- Ko'cha rejimi (OSM): do'kon, klinika, kafe, o'quv markaz kabi
    // joylar (POI) yaqinlashtirilganda nomi/belgisi bilan ko'rinadi ---
    const streets = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      { attribution: "&copy; OpenStreetMap contributors", maxZoom: 19 },
    );

    hybrid.addTo(mapInstance);
    // Foydalanuvchi rejimni almashtira oladi: Sputnik <-> Ko'cha
    L.control
      .layers(
        { "🛰 Sputnik": hybrid, "🗺 Ko'cha (do'kon/klinikalar)": streets },
        null,
        { position: "topright", collapsed: false },
      )
      .addTo(mapInstance);

    mapReady.value = true;

    if (hasCoords) addPlacemark(center);

    // Xaritaga bosilganda marker o'sha joyga qo'yiladi
    mapInstance.on("click", (e) => {
      setLocation([e.latlng.lat, e.latlng.lng]);
    });

    setTimeout(() => mapInstance && mapInstance.invalidateSize(), 200);
  } catch (e) {
    console.error("Xaritani yaratishda xatolik:", e);
    errorMessage.value = e.message || "Xaritani yuklashda xatolik yuz berdi.";
  }
}

/** Markerni yaratadi yoki mavjudini yangi koordinataga ko'chiradi */
function addPlacemark(coords) {
  if (!mapInstance) return;
  if (placemark) {
    placemark.setLatLng(coords);
    return;
  }
  placemark = L.marker(coords, { draggable: true }).addTo(mapInstance);
  // Marker qo'lda surilgach — yangi koordinata saqlanadi
  placemark.on("dragend", () => {
    const { lat, lng } = placemark.getLatLng();
    setLocation([lat, lng], { pan: false });
  });
}

/** Koordinatani formaga saqlaydi va markerni joylaydi */
function setLocation(coords, { pan = true } = {}) {
  form.value.latitude = Number(coords[0].toFixed(6));
  form.value.longitude = Number(coords[1].toFixed(6));
  fieldErrors.location = "";
  addPlacemark(coords);
  if (pan && mapInstance) mapInstance.setView(coords, 16);
  reverseGeocode(coords);
}

/** Koordinatadan o'qilishi mumkin bo'lgan manzilni topadi */
async function reverseGeocode(coords) {
  try {
    const url = `${NOMINATIM_BASE}/reverse?format=json&lat=${coords[0]}&lon=${coords[1]}&accept-language=uz`;
    const res = await fetch(url);
    if (!res.ok) return;
    const data = await res.json();
    foundAddress.value = data.display_name || "";
    // Xaritada joy belgilanganda to'liq manzil yuqoridagi "To'liq manzil"
    // inputiga avtomatik yoziladi (foydalanuvchi keyin tahrirlashi mumkin).
    if (data.display_name) {
      form.value.address = data.display_name;
      fieldErrors.address = "";
    }
  } catch (e) {
    /* reverse geokodlash muvaffaqiyatsiz bo'lsa jim o'tamiz */
  }
}

async function nominatimSearch(query) {
  const url = `${NOMINATIM_BASE}/search?format=json&limit=1&countrycodes=uz&q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const results = res.ok ? await res.json() : [];
  return results[0] || null;
}

/**
 * Kiritilgan manzilni xaritadan qidiradi (geokodlash).
 * Nominatim (bepul OSM geokoder) juda uzun/aniq so'rovlarda ko'pincha 0 natija
 * qaytaradi — shu sabab eng to'liq so'rovdan boshlab, natija topilmasa
 * bosqichma-bosqich soddalashtirib qayta so'raladi.
 */
async function searchAddressOnMap() {
  errorMessage.value = "";
  if (!form.value.address.trim()) {
    fieldErrors.address = "Avval manzilni kiriting.";
    return;
  }
  isSearchingAddress.value = true;
  try {
    const regionLabel = getRegionLabel(form.value.viloyat);
    const queries = [
      ["O'zbekiston", regionLabel, form.value.tuman, form.value.address],
      ["O'zbekiston", regionLabel, form.value.address],
      [regionLabel, form.value.address],
      [form.value.address],
    ]
      .map((parts) => parts.filter(Boolean).join(", "))
      .filter((q, i, arr) => q && arr.indexOf(q) === i);

    let first = null;
    for (const query of queries) {
      first = await nominatimSearch(query);
      if (first) break;
    }

    if (first) {
      const coords = [parseFloat(first.lat), parseFloat(first.lon)];
      setLocation(coords, { pan: true });
      foundAddress.value = first.display_name;
    } else {
      foundAddress.value = "";
      fieldErrors.location =
        "Manzil topilmadi. Xaritaga bosib joyni qo'lda belgilang.";
    }
  } catch (e) {
    errorMessage.value = e.message || "Manzilni qidirishda xatolik yuz berdi.";
  } finally {
    isSearchingAddress.value = false;
  }
}

/** Xaritani o'chirib tashlaydi (bosqichdan chiqilganda) */
function destroyMap() {
  if (mapInstance) {
    mapInstance.remove();
    mapInstance = null;
    placemark = null;
  }
  mapReady.value = false;
}

// 3-bosqichga kirilganda xarita yaratiladi, chiqilganda tozalanadi
// (v-if DOM'ni olib tashlagani uchun har safar qayta yaratish shart)
watch(currentStep, async (step) => {
  if (step === 3) {
    await nextTick();
    initMap();
  } else {
    destroyMap();
  }
});

// Manzil yozilayotganda avtomatik qidirish (1.2 soniya to'xtagach)
watch(
  () => form.value.address,
  (val) => {
    clearTimeout(addressDebounce);
    if (currentStep.value !== 3 || !val || val.trim().length < 5) return;
    addressDebounce = setTimeout(searchAddressOnMap, 1200);
  },
);

// ---------------- Yordamchi funksiyalar ----------------

function normalizePhone(phone) {
  const digits = phone.replace(/\D/g, "").replace(/^998/, "");
  return `+998${digits}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUzPhone(phone) {
  const normalized = normalizePhone(phone);
  return /^\+998\d{9}$/.test(normalized);
}

// ---------------- Validatsiya ----------------

function validateStep1() {
  clearFieldErrors(["name", "category", "type", "contact", "about"]);
  let ok = true;

  if (!form.value.name.trim()) {
    fieldErrors.name = "Biznes nomini kiriting.";
    ok = false;
  }
  if (!form.value.category) {
    fieldErrors.category = "Kategoriyani tanlang.";
    ok = false;
  }
  if (!form.value.type) {
    fieldErrors.type = "Biznes turini tanlang.";
    ok = false;
  }
  if (!form.value.contact.trim()) {
    fieldErrors.contact = "Mas'ul shaxsning to'liq ismini kiriting.";
    ok = false;
  }
  if (!form.value.about.trim()) {
    fieldErrors.about = "Faoliyatingiz haqida qisqacha yozing.";
    ok = false;
  }
  return ok;
}

function validateStep2() {
  clearFieldErrors(["phone", "email"]);
  let ok = true;

  if (!form.value.phone.trim() || !isValidUzPhone(form.value.phone)) {
    fieldErrors.phone =
      "Telefon raqamini to'g'ri kiriting (+998 XX XXX XX XX).";
    ok = false;
  }
  if (!form.value.email.trim() || !isValidEmail(form.value.email)) {
    fieldErrors.email = "Email manzilini to'g'ri kiriting.";
    ok = false;
  }
  return ok;
}

function validateStep3() {
  clearFieldErrors([
    "viloyat",
    "tuman",
    "address",
    "location",
    "ish_kunlari",
    "ish_vaqti",
  ]);
  let ok = true;

  if (!form.value.viloyat) {
    fieldErrors.viloyat = "Viloyatni tanlang.";
    ok = false;
  }
  if (!form.value.tuman) {
    fieldErrors.tuman = "Tuman/shaharni tanlang.";
    ok = false;
  }
  if (!form.value.address.trim()) {
    fieldErrors.address = "To'liq manzilni kiriting.";
    ok = false;
  }
  if (form.value.latitude == null || form.value.longitude == null) {
    fieldErrors.location =
      "Xaritada binoyingizning aniq joyini belgilang (qidiring yoki xaritaga bosing).";
    ok = false;
  }
  if (!form.value.ish_kunlari) {
    fieldErrors.ish_kunlari = "Ish kunlarini tanlang.";
    ok = false;
  }
  if (!form.value.ish_vaqti_from || !form.value.ish_vaqti_to) {
    fieldErrors.ish_vaqti = "Ish vaqtini kiriting (dan / gacha).";
    ok = false;
  } else if (form.value.ish_vaqti_from >= form.value.ish_vaqti_to) {
    fieldErrors.ish_vaqti =
      "Tugash vaqti boshlanish vaqtidan keyin bo'lishi kerak.";
    ok = false;
  }
  return ok;
}

function validateStep4() {
  clearFieldErrors([
    "discount",
    "min_sum",
    "additional_type",
    "panel_login",
    "panel_password",
  ]);
  let ok = true;

  const discount = Number(form.value.discount);
  if (!discount) {
    fieldErrors.discount = "Chegirma foizini tanlang yoki kiriting.";
    ok = false;
  } else if (discount < 5 || discount > 100) {
    fieldErrors.discount = "Chegirma foizi 5 dan 100 gacha bo'lishi kerak.";
    ok = false;
  }
  if (!form.value.additional_type) {
    fieldErrors.additional_type = "Qo'shimcha shartni tanlang.";
    ok = false;
  }
  if (
    form.value.additional_type === "min_purchase" &&
    (!form.value.min_sum || form.value.min_sum <= 0)
  ) {
    fieldErrors.min_sum = "Minimal xarid summasini kiriting.";
    ok = false;
  }

  // Biznes panel login/parol
  const login = (form.value.panel_login || "").trim().toLowerCase();
  if (!login) {
    fieldErrors.panel_login = "Biznes panel loginini kiriting.";
    ok = false;
  } else if (!PANEL_LOGIN_RE.test(login)) {
    fieldErrors.panel_login =
      "Login example@savin.uz ko'rinishida bo'lishi kerak.";
    ok = false;
  } else if (loginCheckStatus.value === "taken") {
    fieldErrors.panel_login = "Bu login band — boshqasini tanlang.";
    ok = false;
  }
  if (!PANEL_PASSWORD_RE.test(form.value.panel_password || "")) {
    fieldErrors.panel_password =
      "Parol kamida 6 ta harf yoki raqamdan iborat bo'lishi kerak.";
    ok = false;
  }
  return ok;
}

// ---------------- Wizard navigatsiyasi ----------------

async function nextStep() {
  errorMessage.value = "";

  let stepIsValid = true;
  if (currentStep.value === 1) stepIsValid = validateStep1();
  else if (currentStep.value === 2) stepIsValid = validateStep2();
  else if (currentStep.value === 3) stepIsValid = validateStep3();
  else if (currentStep.value === 4) stepIsValid = validateStep4();

  if (!stepIsValid) {
    errorMessage.value =
      "Iltimos, qizil rangda belgilangan maydonlarni to'g'ri to'ldiring.";
    return;
  }

  isSubmitting.value = true;
  try {
    if (currentStep.value === 1) {
      const payload = {
        business_name: form.value.name,
        category: form.value.category,
        business_type: form.value.type,
        responsible_full_name: form.value.contact,
        short_description: form.value.about,
      };
      const created = await apiRequest("/applications/step1/", "POST", payload);
      applicationId.value = created.id;
    } else if (currentStep.value === 2) {
      const payload = {
        phone_number: normalizePhone(form.value.phone),
        email: form.value.email,
        instagram: form.value.instagram,
        telegram: form.value.telegram,
        website: form.value.website,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/2/`,
        "PATCH",
        payload,
      );
    } else if (currentStep.value === 3) {
      const payload = {
        region: form.value.viloyat,
        city_district: form.value.tuman,
        full_address: form.value.address,
        latitude: form.value.latitude,
        longitude: form.value.longitude,
        work_days: form.value.ish_kunlari,
        work_hours_from: `${form.value.ish_vaqti_from}:00`,
        work_hours_to: `${form.value.ish_vaqti_to}:00`,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/3/`,
        "PATCH",
        payload,
      );
    } else if (currentStep.value === 4) {
      const payload = {
        discount_percent: Number(form.value.discount),
        min_purchase_amount: form.value.min_sum || null,
        discount_type: form.value.additional_type,
        panel_login: form.value.panel_login.trim().toLowerCase(),
        panel_password: form.value.panel_password,
      };
      await apiRequest(
        `/applications/${applicationId.value}/step/4/`,
        "PATCH",
        payload,
      );
      applicationNumber.value = applicationId.value;
      submitted.value = true;
      isSubmitting.value = false;
      return;
    }

    if (currentStep.value < stepLabels.value.length) {
      currentStep.value++;
    }
  } catch (e) {
    errorMessage.value = e.message || "Noma'lum xatolik yuz berdi.";
  } finally {
    isSubmitting.value = false;
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--;
  errorMessage.value = "";
}

function resetForm() {
  submitted.value = false;
  currentStep.value = 1;
  applicationId.value = null;
  applicationNumber.value = "";
  errorMessage.value = "";
  foundAddress.value = "";
  destroyMap();
  Object.keys(fieldErrors).forEach((k) => (fieldErrors[k] = ""));
  form.value = {
    name: "",
    category: "",
    type: "",
    contact: "",
    about: "",
    phone: "+998",
    email: "",
    instagram: "",
    telegram: "",
    website: "",
    viloyat: "",
    tuman: "",
    address: "",
    latitude: null,
    longitude: null,
    ish_kunlari: "",
    ish_vaqti_from: "09:00",
    ish_vaqti_to: "18:00",
    discount: 15,
    min_sum: 50000,
    additional_type: "",
    panel_login: "",
    panel_password: "",
  };
  loginCheckStatus.value = "";
}
</script>

<style scoped>
/* 1. Forma qadamlari o'zgargandagi Fade-Slide animatsiyasi */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 2. Muvaffaqiyat ekrani uchun maxsus animatsiyalar */
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

.animate-bounce-in {
  animation: bounceIn 0.6s ease-out forwards;
}

.animate-scale-up {
  animation: scaleUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

/* 3. Select uchun maxsus strelka (appearance-none bilan birga) */
select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%239ca3af' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

/* 4. Raqam inputidagi strelkalarni yashirish */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

/* 5. Time input ixchamligi (iOS Safari uchun ham) */
input[type="time"] {
  -webkit-appearance: none;
  appearance: none;
  min-width: 0;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  opacity: 0.4;
}

/* 6. Scrollbar bezagi */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.3);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(199, 238, 225, 0.5);
}

/* 7. OpenStreetMap atribution matni forma ichida ixchamroq ko'rinishi uchun */
:deep(.leaflet-control-attribution) {
  font-size: 9px;
}
</style>
