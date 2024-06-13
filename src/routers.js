import Homepage from "./components/Homepage.vue";
import Hello from "./components/HelloWorld.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Homepage",
    component: Homepage,
    path: "/",
  },
  {
    name: "Hello",
    component: Hello,
    path: "/Hello",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
