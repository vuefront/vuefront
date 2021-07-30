import isUndefined from "lodash-es/isUndefined";
export const state = {
  error: false,
  ssr: false,
  sidebar: false
};
export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  },

  setResponseError(state, e) {
    if (e.graphQLErrors && e.graphQLErrors.message) {
      state.error = e.graphQLErrors.message;
    } else if (e.graphQLErrors && !isUndefined(e.graphQLErrors[0])) {
      state.error = e.graphQLErrors[0].message;
    } else if (e.graphQLErrors) {
      state.error = e.graphQLErrors;
    } else {
      state.error = e;
    }
  },

  setError(state, payload) {
    state.error = payload;
  },

  setSSR(state, payload) {
    state.ssr = payload;
  }

};
export const getters = {
  sidebar(state) {
    return state.sidebar;
  },

  error(state) {
    return state.error;
  },

  ssr(state) {
    return state.ssr;
  }

};
export const actions = {
  async vuefrontInit({
    dispatch,
    commit
  }) {
    if (this.$cookies.get("token")) {
      commit("common/customer/setToken", this.$cookies.get("token"), {
        root: true
      });
    }

    await Promise.all([dispatch("common/language/load", {}, {
      root: true
    }), dispatch("common/customer/checkLogged", {}, {
      root: true
    }), dispatch("store/currency/load", {}, {
      root: true
    })]);

    if (this.$cookies.get("mode")) {
      commit("store/category/setMode", this.$cookies.get("mode"), {
        root: true
      });
    }
  },

  async nuxtServerInit({
    dispatch,
    commit
  }) {
    await dispatch("vuefrontInit");
    commit("setSSR", true);
  },

  async nuxtClientInit({
    commit,
    dispatch,
    rootGetters
  }) {
    if (!rootGetters["vuefront/ssr"]) {
      await dispatch("vuefrontInit");
    }
  }

};