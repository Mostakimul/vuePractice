import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/TheHome.vue'
import DcHeros from './pages/DcHeros.vue'
import Calender from './pages/Calender.vue'
import MarkDown from './pages/MarkDown.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/mark-down', component: MarkDown },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
