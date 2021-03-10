import { createRouter, createWebHashHistory } from 'vue-router'
import AboutPage from '../pages/AboutPage.vue'
import CarsPage from '../pages/CarsPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
