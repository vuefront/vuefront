export const state = {
  error: false,
  ssr: false,
  sidebar: false,
  sidebarCart: false
};
export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  },

  toggleSidebarCart(state) {
    state.sidebarCart = !state.sidebarCart;
  },

  setResponseError(state, e) {
    if (e.graphQLErrors && e.graphQLErrors.message) {
      state.error = e.graphQLErrors.message;
    } else if (e.graphQLErrors && typeof e.graphQLErrors[0] !== "undefined") {
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

  sidebarCart(state) {
    return state.sidebarCart;
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

    await Promise.all([dispatch("store/cart/load", {}, {
      root: true
    }), dispatch("common/language/load", {}, {
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
    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && rootGetters["vuefront/sidebar"]) {
        commit("toggleSidebar");
      }

      next();
    });

    if (!rootGetters["vuefront/ssr"]) {
      await dispatch("vuefrontInit");
    }
  }

};
//# sourceMappingURL=vuefront.mjs.map