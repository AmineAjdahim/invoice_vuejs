import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Signup from '@/views/Signup.vue'
import Dashboard from '@/views/Dashboard.vue'
// import Homepage from '../components/Homepage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'SignupHome',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },

    
  ]
})

export default router
