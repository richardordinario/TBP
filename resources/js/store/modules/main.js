
const state = {
    drawer: true,
    username: null,
    isEnded: false,
}
const getters = {
    getDrawer: state => state.drawer,
    getUsername: state => state.username,
    getIsEnded: state => state.isEnded,
}
const actions = {

}
const mutations = {
    SET_DRAWER: (state, payload) => (
        state.drawer = payload
    ),
    SET_USERNAME: (state, payload) => (
        state.username = payload
    ),
    SET_END: (state, payload) => (
        state.isEnded = payload
    )

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
