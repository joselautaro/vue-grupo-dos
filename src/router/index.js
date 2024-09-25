import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import App from '@/App.vue'
import Ejemplos from '@/components/ProgramacionReactiva/Ejemplo8.vue'
import Padre2 from '@/components/Props/Padre2.vue'
import Padre3 from '@/components/Props/Padre3.vue'
import Padre4 from '@/components/Props/Padre4.vue'
import Padre5 from '@/components/Props/Padre5.vue'
import Padre6 from '@/components/Props/Padre6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/programacion-reactiva',
      name: 'programacion-reactiva',
      component: Ejemplos
    },
    {
      path: '/props',
      name: 'propiedades',
      component: Padre6
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
