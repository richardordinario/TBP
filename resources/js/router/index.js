import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/views/landing/Index.vue'
import Maps from '../components/views/landing/Map.vue'
import Sample from '../components/ExampleComponent.vue'
// import Region from '../components/landing/Region.vue'
import Region from '../components/views/region/Main.vue'
import StartScreen from '../components/views/quiz/StartScreen.vue'
import QuizPanel from '../components/views/quiz/QuizPanel.vue'


const routes = [
    { path: '/', component: Index, name: 'Index' },
    { path: '/map', component: Maps, name: 'Map' },
    { path: '/sample', component: Sample, name: 'Sample' },
    { path: '/region/:uuid', component: Region, name: 'Region' },
    { path: '/quiz/:uuid', component: StartScreen, name: 'Quiz', meta: {user: true} },
    { path: '/quiz/:uuid/:quuid',component: QuizPanel, name: 'QuizPanel', meta: {user: true} }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

function isSelected() {
    return localStorage.getItem('region')
}
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.user)) {
        if(!isSelected()) {
            next({
                path: '/',
                query: { redirect: to.fullPath }
            })
        }else {
            next()
        }
    }else {
        next()
    }
})

export default router;
