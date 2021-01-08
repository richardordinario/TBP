import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import maps from './modules/maps'
import main from './modules/main'

export default new Vuex.Store({
    modules: {
        main,
        maps,
    },
})
