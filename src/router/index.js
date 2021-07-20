import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ships from "../views/Ships.vue";
import ShipPage from "../components/ShipPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ships",
    name: "Ships",
    component: Ships,
  },
  {
    path: "/ship/:name",
    component: ShipPage,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
