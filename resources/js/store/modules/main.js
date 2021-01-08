
const state = {
    drawer: true
}
const getters = {
    getDrawer: state => state.drawer
}
const actions = {

}
const mutations = {
    SET_DRAWER: (state, payload) => (
        state.drawer = payload
    )
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
