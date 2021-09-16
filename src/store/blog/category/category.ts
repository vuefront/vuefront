import { CategoryBlog } from "vuefront-api";
import { MutationTree, GetterTree, ActionTree } from "vuex";
import { RootState } from "vuefront-store";
export type State = {
  category: CategoryBlog;
};

export const state: State = {
  category: {},
};

export const getters: GetterTree<State, RootState> = {
  get(state) {
    return state.category;
  },
};

export const mutations: MutationTree<State> = {
  setCategory(state, category) {
    state.category = category;
  },
};

export const actions: ActionTree<State, RootState> = {};
