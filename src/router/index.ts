// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/signin',
        name: 'SignIn',
        component: () => import('@/pages/SignIn.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/Contact.vue')
      }
    ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})


export default router
