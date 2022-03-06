import Routing from "./index.vue";

const routes = [
  { path: "/", name: "home", component: () => import("./LatestNews.vue") },
];

export { Routing, routes };
