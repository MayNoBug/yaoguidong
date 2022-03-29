import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {path:"/", name:"yao",component:()=>import("../views/homes/HomeOrder.vue")},
      { path: "2-1", component: () => import("../views/homes/HomeFood.vue") },
      { path: "2-2", component: () => import("../views/homes/Homethis.vue") }
    ]
  },
  {
    path: "/login",
    name: "MyLogin",
    component: () => import("../views/MyLogin.vue")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];


const router = new VueRouter({
  routes,
});

router.beforeEach(function (to, from, next) {
  console.log(to, from)
  if (to.path === "/login") {
    next()
  } else {
    let token = localStorage.getItem("token")
    if (!token) return next({ path: "/login" })
    if (token) return next()
  }
})

export default router;
