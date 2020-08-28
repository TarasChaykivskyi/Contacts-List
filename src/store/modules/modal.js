export default {
    state: {
        showModal: false,
        success: false
    },
    getters: {
        MODAL(state) {
            return state.showModal;
        },
        SUCCESS(state) {
            return state.success;
        }
    },
    mutations: {
        showModal(state) {
            state.showModal = !state.showModal;
        },
        modalSuccess(state) {
            state.success = true;
        }
    },
    actions: {
        SHOW_MODAL({commit}) {
            commit('showModal');
        },
        MODAL_SUCESS({commit}) {
            commit('modalSuccess');
        }
    }
}