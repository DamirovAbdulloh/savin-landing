<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";

// Do'st taklif havolasi: https://savin.uz/i/<KOD>
//
// Bosilganda:
//   1) Ilova o'rnatilgan bo'lsa — `savin://invite/<KOD>` orqali ochiladi va
//      kod ro'yxatdan o'tish oqimiga uzatiladi.
//   2) Ilova yo'q bo'lsa — Play Marketga o'tadi. Kod `referrer` parametrida
//      ketadi, ilova birinchi ochilganda uni o'qiy oladi.
//   3) Kompyuterda ochilsa — shunchaki kod ko'rsatiladi (qo'lda kiritish uchun).

const ANDROID_PACKAGE = "com.iqbolmadaliyev.savin";
const APP_SCHEME = "savin";

const route = useRoute();
const code = ref("");
const isMobile = ref(false);
const copied = ref(false);
let fallbackTimer = null;

const playStoreUrl = () =>
  `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}&referrer=${encodeURIComponent(
    "utm_source=referral&code=" + code.value,
  )}`;

function openApp() {
  if (!code.value) return;
  const deepLink = `${APP_SCHEME}://invite/${code.value}`;

  // Android: intent:// eng ishonchli — ilova bo'lmasa Play Market ochiladi
  const isAndroid = /android/i.test(navigator.userAgent);
  if (isAndroid) {
    window.location.href =
      `intent://invite/${code.value}#Intent;scheme=${APP_SCHEME};` +
      `package=${ANDROID_PACKAGE};S.browser_fallback_url=` +
      `${encodeURIComponent(playStoreUrl())};end`;
    return;
  }

  // iOS / boshqalar: sxemani sinab ko'ramiz, ochilmasa do'konga o'tamiz
  window.location.href = deepLink;
  clearTimeout(fallbackTimer);
  fallbackTimer = setTimeout(() => {
    if (!document.hidden) window.location.href = playStoreUrl();
  }, 1500);
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(code.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    /* clipboard yo'q — kod baribir ekranda ko'rinib turadi */
  }
}

onMounted(() => {
  code.value = String(route.params.code || "").toUpperCase();
  isMobile.value = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
  // Mobil qurilmada darhol ilovani ochishga urinamiz
  if (isMobile.value) openApp();
});

onBeforeUnmount(() => clearTimeout(fallbackTimer));
</script>

<template>
  <main class="invite">
    <div class="card">
      <div class="gift">🎁</div>
      <h1>Sizni Savin'ga taklif qilishdi</h1>
      <p class="sub">
        Ro'yxatdan o'ting — 400+ joyda 10–40% chegirma sizni kutmoqda.
      </p>

      <div class="code-box">
        <span class="label">Taklif kodingiz</span>
        <strong class="code">{{ code || "—" }}</strong>
        <button class="copy" type="button" @click="copyCode">
          {{ copied ? "Nusxalandi" : "Nusxa olish" }}
        </button>
      </div>

      <button class="primary" type="button" @click="openApp">
        Ilovani ochish
      </button>
      <a class="secondary" :href="playStoreUrl()">Play Marketdan yuklab olish</a>

      <ul class="perks">
        <li>400+ joyda 10–40% chegirma</li>
        <li>Cheksiz QR foydalanish</li>
        <li>Istalgan vaqtda bekor qilish</li>
      </ul>

      <p class="hint">
        Ilova avtomatik ochilmasa — yuklab oling va ro'yxatdan o'tayotganda
        yuqoridagi kodni kiriting.
      </p>
    </div>
  </main>
</template>

<style scoped>
.invite {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(160deg, #f3fbef 0%, #ffffff 60%);
}
.card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border: 1px solid #e6eee2;
  border-radius: 24px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 18px 50px rgba(16, 61, 24, 0.08);
}
.gift {
  width: 72px;
  height: 72px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: #e8f8e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}
h1 {
  font-size: 22px;
  font-weight: 800;
  margin: 0 0 8px;
  color: #10230f;
}
.sub {
  font-size: 14px;
  color: #5d6b5c;
  margin: 0 0 22px;
}
.code-box {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  background: #f6faf4;
  border: 1px dashed #bfe0ae;
  border-radius: 14px;
  padding: 14px;
  margin-bottom: 18px;
}
.label {
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #7c8a7b;
  width: 100%;
}
.code {
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #10230f;
}
.copy {
  border: 1px solid #cfe6c2;
  background: #fff;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
}
.primary {
  display: block;
  width: 100%;
  border: 0;
  border-radius: 14px;
  background: #89ea5c;
  color: #10230f;
  font-weight: 700;
  font-size: 15px;
  padding: 14px;
  cursor: pointer;
}
.secondary {
  display: block;
  margin-top: 10px;
  font-size: 13px;
  color: #3b7a2a;
  text-decoration: none;
}
.perks {
  list-style: none;
  padding: 0;
  margin: 22px 0 0;
  text-align: left;
  background: #f6faf4;
  border-radius: 14px;
  padding: 14px 16px;
}
.perks li {
  font-size: 13px;
  color: #33452f;
  padding: 4px 0 4px 22px;
  position: relative;
}
.perks li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #3b7a2a;
  font-weight: 700;
}
.hint {
  font-size: 11.5px;
  color: #8a968a;
  margin: 16px 0 0;
}
</style>
