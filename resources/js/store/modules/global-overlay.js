const global_overlay = {
    namespaced: true,
    state:{
        global_overlay: {
            type: null,
            text: null,
            error: null,
            emit: null,
            last_confirmation: false,
        }

    },
    getters: {
        getOverlay: (state) => state.global_overlay,
    },
    mutations: {
        SET_OVERLAY(state,payload) {
            state.global_overlay.type = payload.type;
            state.global_overlay.text = payload.text;
            state.global_overlay.error = payload.error;
            state.global_overlay.emit = payload.emit;
        },
        SET_CONFIRMATION(state,payload) {
            state.global_overlay.last_confirmation = payload;
        },
    },
    actions: {
        setOverlay(context, payload) {
            context.commit('SET_OVERLAY', payload)
        },
        setConfirmation(context, payload) {
            context.commit('SET_CONFIRMATION', payload)
        },
        closeOverlay(context) {
            let data = {
                type: null,
                text: null,
                error: null,
                emit: null,
            };
            context.commit('SET_OVERLAY', data)
        },
    },
}

export default global_overlay
// delete-post-review
// delete-my-reviews-review
// delete-post
// delete-my-post
