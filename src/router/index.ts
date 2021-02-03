import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import oNama from "@/views/Onama.vue";
import Kontakt from "@/views/Kontakt.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/onama",
    name: "O nama",
    component: oNama,
  },
  {
    path: "/natjecanja",
    name: "Natjecanja",
    component: () => import("../views/Natjecanja.vue"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
