import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import maps from './modules/maps'

export default new Vuex.Store({
    modules: {
        maps,
    },
})
