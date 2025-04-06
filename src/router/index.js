import { createRouter, createWebHistory } from "vue-router";
import about from "../views/about.vue";
import Dashboard from "../views/Dashboard.vue";
import User from "@/views/User.vue";
import UserDetail from "@/views/UserDetail.vue";
import UserPost from "@/views/UserPost.vue";
import UserProfile from "@/views/UserProfile.vue";
import UserIndex from "@/views/UserIndex.vue";
const routes = [
  {
    path: "/",
    component: Dashboard,
  },
  {
    path: "/about",
    component: about,
  },
  {
    path: "/user",
    component: User,
  },
  // {
  //   path: "/user/:params",
  //   component: UserDetail
  // },
  // {
  //   path: "/user/:params/posts",
  //   component: UserPost
  // },
  // {
  //   path: "/user/:params/profile",
  //   component: UserProfile
  // },
  {
    path: "/user/:params",
    component: UserIndex,
    children: [
      {
        path: "",
        component: UserDetail,
      },
      {
        path: "/user/:params/posts",
        component: UserPost,
      },
      {
        path: "/user/:params/profile",
        component: UserProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
