import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    Name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
