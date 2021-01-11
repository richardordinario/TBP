import { Regions } from '../../api/data/map'
import { Quizes } from '../../api/data/quiz'

const state = {
    regions: Regions,
    quizes: Quizes,
    selected: [],
    quiz: []
}
const getters = {
    getRegion: state => state.regions,
    getSelected: state => state.selected
}
const actions = {
    searchRegion({commit,getters}, payload) {
        for (let index = 0; index < getters['getRegion'].length; index++) {
           if(getters['getRegion'][index].uuid === payload) {
                commit('SET_REGION', getters['getRegion'][index])
           }
        }
    },
    searchQuiz({commit,getters}, payload) {

    }
}
const mutations = {
    SET_REGION: (state, payload) => (
        state.selected = payload
    )
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
