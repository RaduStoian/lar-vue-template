const user = {
    namespaced: true,
    state:{
        user: null,
    },
    getters: {
        getUser: (state) => state.user,
    },
    mutations: {
        SET_USER(state,payload) {
            state.user = payload
        },
    },
    actions: {
        setUser(context, payload) {
            context.commit('SET_USER', payload)
        },
    },
}

export default user

