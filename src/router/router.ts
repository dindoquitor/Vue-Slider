import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "../pages/About.vue";

const routes = [
  {
    path: "/",
    Name: "Home",
    component: Home,
  },
  {
    path: "/about",
    Name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
