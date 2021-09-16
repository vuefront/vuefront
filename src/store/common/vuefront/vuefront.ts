import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
export type State = {
  error: boolean | string;
  ssr: boolean;
  sidebar: boolean;
};
export const state: State = {
  error: false,
  ssr: false,
  sidebar: false,
};

export const mutations: MutationTree<State> = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
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
};

export const getters: GetterTree<State, RootState> = {
  sidebar(state) {
    return state.sidebar;
  },
  error(state) {
    return state.error;
  },
  ssr(state) {
    return state.ssr;
  },
};

export const actions: ActionTree<State, RootState> = {
  async vuefrontInit({ dispatch, commit }) {
    if (this.$cookies.get("token")) {
      commit("common/customer/setToken", this.$cookies.get("token"), {
        root: true,
      });
    }
    await Promise.all([
      dispatch("common/language/load", {}, { root: true }),
      dispatch("common/customer/checkLogged", {}, { root: true }),
      dispatch("store/currency/load", {}, { root: true }),
    ]);

    if (this.$cookies.get("mode")) {
      commit("store/category/setMode", this.$cookies.get("mode"), {
        root: true,
      });
    }
  },
  async nuxtServerInit({ dispatch, commit }) {
    await dispatch("vuefrontInit");
    commit("setSSR", true);
  },
  async nuxtClientInit({ commit, dispatch, rootGetters }) {
    if (!rootGetters["vuefront/ssr"]) {
      await dispatch("vuefrontInit");
    }
  },
};
