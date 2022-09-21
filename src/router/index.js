/* eslint-disable no-unused-vars */
import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import store from "../store"
import { RoleEnum } from "../enums/role.enum"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    beforeEnter: (to, from, next) => {
      const user = store.state.user

      console.log(user)

      if (user === null) {
        next({ name: "auth", query: { path: to.name } })
        return
      }

      if (user.role !== RoleEnum.MANAGER) {
        console.log(to)
        console.log(from)
        next("/")
        return
      }

      next()
      // console.log(to, from)
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../views/Auth.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)

  if (to.name === "admin") {
    return next("/about")
  } else {
    next("/")
  }

  next()
})

export default router
