import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../components/landing/Home.vue'


const routes = [
    { path: '/home', component: Home, name: 'Home' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
