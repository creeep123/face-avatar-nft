import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import AvatarCreator from "../views/AvatarCreator/index.vue";
import CamPage from "../views/CamPage/index.vue";
import ResultPage from "../views/ResultPage/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "AvatarCreator",
    component: AvatarCreator,
  },
  {
    path: "/cam",
    name: "CamPage",
    component: CamPage,
  },
  {
    path: "/photo",
    name: "ResultPage",
    component: ResultPage,
  },
  {
    path: "/avatar",
    name: "AvatarCreator",
    component: AvatarCreator,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
