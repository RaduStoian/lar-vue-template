const editingPost = {
    namespaced: true,
    state:{
        politician: false
    },
    getters: {
        getEditingPost: (state) => state.politician,
    },
    mutations: {
        SET_EDITING_POLITICIAN(state,payload) {
            state.politician = payload;
        },
    },
    actions: {
        setEditingPost(context, payload) {
            context.commit('SET_EDITING_POLITICIAN', payload)
        },
    },
}

export default editingPost

