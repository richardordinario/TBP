import { Regions } from '../../api/data/map'
import { Quizes } from '../../api/data/quiz'
import { Choices } from '../../api/data/choices'

const state = {
    regions: Regions,
    quizes: Quizes,
    choices: Choices,
    selected: [],
    selection: [],
    quiz: []
}
const getters = {
    getRegion: state => state.regions,
    getSelected: state => state.selected,
    getQuizes: state => state.quizes,
    getQuiz: state => state.quiz,
    getChoices: state => state.choices,
    getSelection: state => state.selection,
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
        for (let index = 0; index < getters['getQuizes'].length; index++) {
            if(getters['getQuizes'][index].uuid === payload) {
                commit('SET_QUIZ', getters['getQuizes'][index])
            }
        }
    },
    getChoices({commit,getters}, payload) {
        for (let index = 0; index < getters['getChoices'].length; index++) {
            if(getters['getChoices'][index].quuid === payload) {
                commit('SET_SELECTION', getters['getChoices'][index])
            }
        }
    },

}
const mutations = {
    SET_REGION: (state, payload) => (
        state.selected = payload
    ),
    SET_QUIZ: (state, payload) => (
        state.quiz = payload
    ),
    SET_SELECTION: (state, payload) => (
        state.selection = payload
    )

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
