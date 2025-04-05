import { createRouter, createWebHistory } from "vue-router";
import about from "../views/about.vue";
import Dashboard from "../views/Dashboard.vue";


const routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/about",
    component: about
  }
]

	const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;