import gql from "graphql-tag";
export const state = {
  error: false,
  ssr: false,
  sidebar: false,
  sidebarCart: false,
  version: "1.0.0"
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
  },

  setVersion(state, payload) {
    state.version = payload;
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
  },

  version(state) {
    return state.version;
  }

};
export const actions = {
  async checkVersion(_ref) {
    let {
      commit
    } = _ref;

    try {
      const {
        data
      } = await this.$vfapollo.query({
        query: gql`
          {
            version
          }
        `
      });
      commit("setVersion", data.version);
    } catch (e) {
      commit("setVersion", "0.0.1");
    }
  },

  async vuefrontInit(_ref2) {
    let {
      dispatch,
      commit,
      getters
    } = _ref2;
    await dispatch("checkVersion");

    if (this.$vuefront.version.api > getters["version"]) {
      console.log("deprecated api");
      this.$router.push("/deprecated-api");
      this.$router.beforeEach((to, from, next) => {
        if (to.path !== "/deprecated-api") {
          next("/deprecated-api");
          return;
        }

        next();
      });
      return;
    }

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

  async nuxtServerInit(_ref3) {
    let {
      dispatch,
      commit
    } = _ref3;
    await dispatch("vuefrontInit");
    commit("setSSR", true);
  },

  async nuxtClientInit(_ref4) {
    let {
      commit,
      dispatch,
      rootGetters
    } = _ref4;
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