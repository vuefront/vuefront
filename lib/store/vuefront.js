const state = () => ({
  error: false,
  ssr: false
});
const mutations = {
  setError(state, payload) {
    state.error = payload;
  },
  setSSR(state, payload) {
    state.ssr = payload;
  }
};
const getters = {
  error(state) {
    return state.error
  },
  ssr(state) {
    return state.ssr
  }
};
const actions = {
  async vuefrontInit({ dispatch, commit, rootGetters }) {
    await Promise.all([
      dispatch('store/currency/load', {}, { root: true }),
      dispatch('common/language/load', {}, { root: true }),
      dispatch('common/customer/checkLogged', {}, { root: true }),
    ]);
    if (this.$cookies.get('mode')) {
      commit('store/category/setMode', this.$cookies.get('mode'), {
        root: true
      });
    }
  },
  async nuxtServerInit({ dispatch, commit }) {
    await dispatch('vuefrontInit');
    commit('setSSR', true);
  },
  async nuxtClientInit({ dispatch, rootGetters }) {
    if (!rootGetters['vuefront/ssr']) {
      await dispatch('vuefrontInit');
    }
  }
};

export { actions, getters, mutations, state };
