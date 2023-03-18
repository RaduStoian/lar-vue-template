const spinner = {
    namespaced: true,
    state:{
        spinnerVisible: false,
    },
    getters: {
        getSpinner: (state) => state.spinner,
    },
    mutations: {
        SET_SPINNER(state,payload) {
            state.spinnerVisible = payload
        },
    },
    actions: {
        setSpinner(context, payload) {
            context.commit('SET_SPINNER', payload)
        },
    },
}

export default spinner

