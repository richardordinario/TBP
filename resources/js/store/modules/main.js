
const state = {
    drawer: true,
    username: null
}
const getters = {
    getDrawer: state => state.drawer,
    getUsername: state => state.username
}
const actions = {

}
const mutations = {
    SET_DRAWER: (state, payload) => (
        state.drawer = payload
    ),
    SET_USERNAME: (state, payload) => (
        state.username = payload
    )
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
