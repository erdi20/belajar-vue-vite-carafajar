import { createRouter, createWebHistory } from "vue-router";
import about from "../views/about.vue";
import Dashboard from "../views/Dashboard.vue";
import User from "@/views/User.vue";
import UserDetail from "@/views/UserDetail.vue";
const routes = [
  {
    path: "/",
    component: Dashboard
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/user/:params",
    component: UserDetail
  },
]

	const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;