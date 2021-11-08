import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
import { Category } from "vuefront-api";
export type State = {
  category: Category;
  mode: string;
};
export const state: State = {
  category: {},
  mode: "grid",
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.category;
  },
  mode(state) {
    return state.mode;
  },
};

export const mutations: MutationTree<State> = {
  setCategory(state, category) {
    state.category = category;
  },
  setMode(state, payload) {
    state.mode = payload;
  },
};

export const actions: ActionTree<State, RootState> = {};
