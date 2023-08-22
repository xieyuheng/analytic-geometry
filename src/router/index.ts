import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../pages/routes'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
