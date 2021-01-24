export const UserModule = {
    namespaced: true,

    state: {
        user: null
    },
      
    // Mutations are function that effects the STATE.
    // Mutations has to be ALL_CAPS.
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },
      
    // Actions are function that you call through your app that call mutations.
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    }
}