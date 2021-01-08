
const state = {
    regions: [
        {
            map: ASSET + '/ilocus-colored-map.png',
            title: 'ILOCUS REGION',
            region: '1',
            uuid: '5202a80b-ba7d-4b54-9014-85788930ca34'
        },
        {
            map: ASSET + '/ilocus-colored-map.png',
            title: 'CAGAYAN VALLEY',
            region: '2',
            uuid: '3233286f-caef-476e-9636-af5402b72c9d'
        },
    ],
    selected: [],
}
const getters = {
    getRegion: state => state.regions
}
const actions = {
    searchRegion({commit,getters}, payload) {
        for (let index = 0; index < getters['getRegion'].length; index++) {
           if(getters['getRegion'][index].region === payload) {
                commit('SET_REGION', getters['getRegion'][index])
           }
        }
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
