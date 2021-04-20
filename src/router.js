import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/TheHome.vue';
import DcHeros from './pages/DcHeros.vue';
import Calender from './pages/Calender.vue';
import MarkDown from './pages/MarkDown.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dc-heros',
    name: 'DcHeros',
    component: DcHeros,
  },
  {
    path: '/calender',
    name: 'Calender',
    component: Calender,
  },
  {
    path: '/mark-down',
    name: 'MarkDown',
    component: MarkDown,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
