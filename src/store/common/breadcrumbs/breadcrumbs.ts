import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
interface IBreadcrumbs {
  title: string;
  to: string;
}
export type State = {
  loaded: boolean;
  items: IBreadcrumbs[];
};

export const state: State = {
  items: [],
  loaded: false,
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.items;
  },
  loaded(state) {
    return state.loaded;
  },
};

export const mutations: MutationTree<State> = {
  setItems(state, payload) {
    state.items = payload;
  },
  clearItems(state, payload) {
    state.items = [];
  },
  setLoaded(state, payload) {
    state.loaded = payload;
  },
};

export const actions: ActionTree<State, RootState> = {
  init({ dispatch, rootGetters, commit }) {
    commit("clearItems");
    commit("setLoaded", false);
  },

  load({ commit }, contactData) {
    let breadcrumbs = [];
    if (contactData && contactData.length > 0) {
      breadcrumbs = contactData;
    }
    if (this.$router.currentRoute.value.matched.length > 0) {
      const component =
        this.$router.currentRoute.value.matched[0].instances.default;
      if (
        component !== null &&
        typeof component !== "undefined" &&
        typeof component.$options !== "undefined" &&
        component.$options !== null &&
        typeof component.$options.breadcrumbs !== "undefined"
      ) {
        const result = component.$options.breadcrumbs.call(component);
        breadcrumbs = [...breadcrumbs, ...result];
      }
    }
    commit("setItems", breadcrumbs);
    commit("setLoaded", true);
  },
};
