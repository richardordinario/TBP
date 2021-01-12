import { Regions } from '../../api/data/map'
import { Quizes } from '../../api/data/quiz'
import { Choices } from '../../api/data/choices'

const state = {
    regions: Regions,
    quizes: Quizes,
    choices: Choices,
    selected: [],
    selection: [],
    quiz: [],
    score: 0,
    answer: false
}
const getters = {
    getRegion: state => state.regions,
    getSelected: state => state.selected,
    getQuizes: state => state.quizes,
    getQuiz: state => state.quiz,
    getChoices: state => state.choices,
    getSelection: state => state.selection,
    getScore: state => state.score,
    getAnswer: state => state.answer,
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
    checkAnswer({commit, getters}, payload) {
        var element = []
        for (let index = 0; index < getters['getQuiz'].questions.length; index++) {
            if(getters['getQuiz'].questions[index].question === payload.qName) {
                element = getters['getQuiz'].questions[index]
            }
        }
        for (let i = 0; i < element.answers.length; i++) {
            if(element.answers[i] == parseInt(payload.cardID)) {
                const score = getters['getScore'] + element.score
                commit('SET_SCORE', score)
                commit('SET_ANSWER', true)
                break;
            }else {
                commit('SET_ANSWER', false)
            }
        }
    }

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
    ),
    SET_SCORE: (state, payload) => (
        state.score = payload
    ),
    SET_ANSWER: (state, payload) => (
        state.answer = payload
    )

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
