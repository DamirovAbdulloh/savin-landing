import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Landing/HomeView.vue";
import applications from "../components/Landing/ArizaQoldiring.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/ariza",
      name: "ariza",
      component: applications,
    },
  ],
});

export default router;
