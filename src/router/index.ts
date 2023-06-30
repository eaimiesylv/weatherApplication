import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories'
  },{
    path:'/memories',
    component:MemoriesPage
  },{
    path:'/memories/:id',
    component:()=>import('../pages/MemoryDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
