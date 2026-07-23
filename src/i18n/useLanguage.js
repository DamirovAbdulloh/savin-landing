import { ref, watch } from "vue";
import translations from "./translations.json";

const availableLangs = Object.keys(translations);
const savedLang = localStorage.getItem("lang");
const initialLang = availableLangs.includes(savedLang) ? savedLang : "uz";

const lang = ref(initialLang);

watch(lang, (newLang) => {
  localStorage.setItem("lang", newLang);
});

function t(path) {
  const keys = path.split(".");
  let value = translations[lang.value];
  for (const key of keys) {
    value = value?.[key];
  }
  return value ?? path;
}

export function useLanguage() {
  return { lang, setLang: (l) => (lang.value = l), availableLangs, t };
}