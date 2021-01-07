
const state = {
    regions: [
        {
            map: ASSET + '/ilocus-colored-map.png', 
            title: 'ILOCUS REGION', 
            region: '1',
        },
        {
            map: ASSET + '/ilocus-colored-map.png', 
            title: 'CAGAYAN VALLEY', 
            region: '2',
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