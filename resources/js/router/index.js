import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/views/landing/Index.vue'
import Maps from '../components/views/landing/Map.vue'
import Sample from '../components/ExampleComponent.vue'
// import Region from '../components/landing/Region.vue'
import Region from '../components/views/region/Main.vue'
import StartScreen from '../components/views/quiz/StartScreen.vue'


const routes = [
    { path: '/', component: Index, name: 'Index' },
    { path: '/map', component: Maps, name: 'Map' },
    { path: '/sample', component: Sample, name: 'Sample' },
    { path: '/region', component: Region, name: 'Region' },
    { path: '/quiz', component: StartScreen, name: 'Quiz' },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
