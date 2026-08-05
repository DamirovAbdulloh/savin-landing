import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Landing/HomeView.vue";
import applications from "../components/Landing/ArizaQoldiring.vue";
import InviteView from "../views/Landing/InviteView.vue";

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
    {
      // Do'st taklif havolasi: ilovani ochadi yoki Play Marketga yo'naltiradi
      path: "/i/:code",
      name: "invite",
      component: InviteView,
    },
  ],
});

export default router;
