import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/landing/Index.vue'
import Maps from '../components/landing/Map.vue'


const routes = [
    { path: '/', component: Index, name: 'Index' },
    { path: '/map', component: Maps, name: 'Map' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
