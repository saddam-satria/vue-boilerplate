import About from '@/pages/About.vue';
import Home from '@/pages/Home.vue';
import { createMemoryHistory, createRouter, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
];

const router = createRouter({ routes, history: createMemoryHistory() });

export default router;
