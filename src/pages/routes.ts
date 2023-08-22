import { RouteRecordRaw } from "vue-router"
import Playground from "./playground/Playground.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/playground" },
  {
    path: "/playground/:encoded?",
    component: Playground,
    props: (route) => ({ encoded: route.params.encoded }),
  },
]
