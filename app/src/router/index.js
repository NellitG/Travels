import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PostsView, DetailsView, LoginView, TravelPlanView, InspirationView, ShopView } from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  // { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  {path:"/travelplan", name:"Travelplan", component: () => import("../views/TravelPlanView.vue")},
  {path:"/inspiration", name:"Inspiration", component: () => import("../views/InspirationView.vue")},
  {path:"/shop", name:"Shop", component: () => import("../views/ShopView.vue")}
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });



export default router;
